   You can check the conditions using OpenFGA’s built-in APIs. When you issue a `check` or `listObjects` query, OpenFGA automatically evaluates any conditions that are defined on the relationship tuples.

**How Conditions Are Evaluated:**

1. **Write the Conditional Relationship Tuple**:  
   When you write a relationship tuple with a condition, you supply the condition’s context (parameters). This context is stored alongside the tuple.

   For example:
   ```js
   await fgaClient.write({
     writes: [
       {
         user: "user:alice",
         relation: "can_invite",
         object: "application:my_app",
         condition: {
           name: "has_invitations_left",
           context: { "remaining_invitations": "5" }
         }
       }
     ]
   });
   ```

2. **Check or ListObjects Requests**:  
   When you later call `check` to see if a user has a relationship to an object, OpenFGA will evaluate the stored condition. If the condition returns true, `allowed` will be `true`; otherwise, `false`.

   For example, to see if `alice` can invite:
   ```js
   const { allowed } = await fgaClient.check({
     user: "user:alice",
     relation: "can_invite",
     object: "application:my_app"
   });
   // If `remaining_invitations > 0`, allowed will be true; otherwise false.
   ```

   You do not need to provide the `remaining_invitations` in the check request context if it’s already stored in the tuple. If you do provide it, note that the value stored in the tuple will take precedence.

   Similarly, if you want to list all objects that `alice` can invite on:
   ```js
   const response = await fgaClient.listObjects({
     user: "user:alice",
     relation: "can_invite",
     type: "application"
   });
   // response.objects will contain only those applications for which the condition `remaining_invitations > 0` is true.
   ```

**Key Points:**

- **No Separate Condition Query**: You don’t need a special "condition check" endpoint. Conditions are evaluated at query-time during normal `check` and `listObjects` calls.
- **Request Context vs. Persisted Context**: If you provide context parameters during a query request, they merge with the stored context. The persisted (stored) context always takes precedence.
- **Automatic Evaluation**: OpenFGA handles the condition evaluation internally using the parameters and condition expressions you defined in your model.





You can adapt a similar approach to manage invitation counts for users, using conditional relationships in OpenFGA and updating them from your Camunda workflow. Here’s how it could work:

1. **Defining the Concept of "Invitations Allowed" as a Condition**:  
   Instead of a time-based condition (like in the provided example with `non_expired_grant`), you would define a condition that depends on the number of remaining invitations. For example, the family plan admin relationship grants the user permission to send invitations. We can imagine a condition `has_invitations_left` that checks if the number of allowed invitations is greater than zero.

   For example, you might define a model where a user is granted the right to "invite" on your application object if they still have invitations left:
   ```  
   model
     schema 1.1

   type user

   type application
     relations
       define can_invite: [user with has_invitations_left]

   condition has_invitations_left(remaining_invitations: int) {
     remaining_invitations > 0
   }
   ```

   In this model, any `can_invite` relationship must be assigned with a condition that ensures the user has a positive number of invitations left.

2. **Storing and Updating the Condition Context**:  
   When you write the relationship tuple for `application:my_app#can_invite@user:alice`, you provide the condition context, for example:
   ```js
   await fgaClient.write({
     writes: [
       {
         user: "user:alice",
         relation: "can_invite",
         object: "application:my_app",
         condition: {
           name: "has_invitations_left",
           context: { "remaining_invitations": "5" }
         }
       }
     ]
   });
   ```

   This means that user `alice` initially has 5 invitations left. The condition says that access to the "invite" action is only allowed if `remaining_invitations > 0`.

3. **Integration with Camunda**:  
   Your Camunda node.js workflow can handle the process of sending invitations. Each time an invitation is sent, your workflow can:
   
   - Decrement the invitation count on the backend.
   - Update the relationship tuple in OpenFGA with the new, decreased `remaining_invitations`.
   
   For example, if `alice` uses one invitation, your Camunda process will know that her new count is 4. You then call the FGA API to rewrite the tuple condition:
   ```js
   await fgaClient.write({
     writes: [
       {
         user: "user:alice",
         relation: "can_invite",
         object: "application:my_app",
         condition: {
           name: "has_invitations_left",
           context: { "remaining_invitations": "4" }
         }
       }
     ]
   });
   ```
   
   Over time, these updates would continue: `4 -> 3 -> 2 -> 1 -> 0`.

4. **Frontend Checks**:  
   On the frontend, when a user tries to send an invitation, the client application can issue a `check` request to OpenFGA:
   ```js
   const { allowed } = await fgaClient.check({
       user: 'user:alice',
       relation: 'can_invite',
       object: 'application:my_app'
     });
   
   // If allowed is true, show the "Send Invitation" button.
   // If allowed is false, disable the "Send Invitation" button.
   ```
   
   Note that for this particular condition, the value of `remaining_invitations` is fully maintained on the backend side (persisted in the relationship tuple). When you do a check, the persisted context in OpenFGA already includes the current `remaining_invitations`. If `remaining_invitations` is 0, `allowed` will return `false`.

5. **How This Work?**  
   OpenFGA’s conditional tuples can enforce conditions at authorization check time. By coupling your invitation logic to these conditions:
   
   - **Camunda** updates the condition context after each invitation is sent (or any other business logic event).
   - **OpenFGA** enforces that the user can only perform the action (e.g., send invitations) if the condition (`remaining_invitations > 0`) is met.
   - **Frontend** performs a check before enabling or showing the invitation action. If `allowed` returns `false`, the user can’t proceed.
   
   As a result, you have a real-time, centralized way of controlling whether users can send further invitations, all driven by dynamic authorization conditions rather than hardcoded logic on the frontend or separate backend checks.

