1. **Set Up Your Server to Handle File Uploads**:
   First, create an endpoint on your server that can trigger the build process and upload files to S3.

   ```javascript
   const express = require('express');
   const AWS = require('aws-sdk');
   const fs = require('fs');
   const path = require('path');
   const { exec } = require('child_process');

   const app = express();
   const port = 3000;

   AWS.config.update({
     accessKeyId: process.env.AWS_ACCESS_KEY_ID,
     secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
     region: process.env.AWS_REGION
   });

   const s3 = new AWS.S3();

   const uploadFileToS3 = (filePath, bucketName, key) => {
     return new Promise((resolve, reject) => {
       const fileContent = fs.readFileSync(filePath);
       const params = {
         Bucket: bucketName,
         Key: key,
         Body: fileContent
       };

       s3.upload(params, (err, data) => {
         if (err) {
           return reject(err);
         }
         resolve(data.Location);
       });
     });
   };

   app.post('/build-and-upload', async (req, res) => {
     try {
       // Run the build process (adjust command as needed)
       exec('npx contentlayer build', async (err, stdout, stderr) => {
         if (err) {
           console.error(`Build error: ${stderr}`);
           return res.status(500).send('Build process failed');
         }
         
         const buildDirectory = path.join(__dirname, 'path-to-your-built-files');
         const bucketName = 'your-s3-bucket-name';
         const files = fs.readdirSync(buildDirectory);

         const uploadPromises = files.map(file => {
           const filePath = path.join(buildDirectory, file);
           const key = `build/${file}`; // Adjust the key as needed
           return uploadFileToS3(filePath, bucketName, key);
         });

         await Promise.all(uploadPromises);
         res.send('Build and upload completed successfully');
       });
     } catch (error) {
       console.error(error);
       res.status(500).send('An error occurred');
     }
   });

   app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}`);
   });
   ```

2. **Deploy Your Server**:
   Ensure your server is running and accessible. For local development, you can run the server with:

   ```bash
   node your-server-file.js
   ```

3. **Set Up Postman to Trigger the Build and Upload**:
   - Open Postman and create a new POST request.
   - Set the URL to your server’s endpoint, e.g., `http://localhost:3000/build-and-upload`.
   - Ensure the request type is set to POST.
   - Click on the "Send" button.

4. **Configure Environment Variables**:
   Ensure your server has access to the required AWS credentials. You can set these in your environment or use a `.env` file.

   ```env
   AWS_ACCESS_KEY_ID=your-access-key-id
   AWS_SECRET_ACCESS_KEY=your-secret-access-key
   AWS_REGION=your-region
   ```

   If using a `.env` file, load it in your server code:

   ```javascript
   require('dotenv').config();
   ```

5. **Testing**:
   When you send the POST request via Postman, your server should:
   - Run the build process.
   - Upload the built files to your specified S3 bucket.
   - Respond with a success message if everything goes well.

