import type { NextAuthOptions } from 'next-auth'
import OauthProvider from 'next-auth/providers/oauth'

// Define authentication options using NextAuthOptions interface
export const authOptions: NextAuthOptions = {
  // Customize authentication pages
  pages: {
    signIn: '/login', // Redirect users to "/login" when signing in
  },
  // Configure session management
  session: {
    strategy: 'jwt', // Use JSON Web Tokens (JWT) for session management
  },
  // added secret key
  secret: 'test',
  // Add debug logs,
  debug: true,
  // Configure authentication providers
  providers: [
    {
      id: 'zammad',
      name: 'Zammad',
      type: 'oauth',
      authorization: {
        url: 'http://localhost:3000/oauth/authorize',
        params: {
          scope: undefined,
        },
      },
      token: 'http://localhost:3000/oauth/token',
      userinfo: 'http://localhost:3000/api/v1/users/me',
      clientId: '_A9nTCwoUKfwsgQtP4eBYOH5m_eQCLFoqymAvJbEFmw',
      clientSecret: 'IKM_UtPeQV0Rq0jCkZZ7qzhiFP20UDTXSbY4IxQySgU',
      profile(profile) {
        return {
          email: profile.email,
          name: profile.firstname,
          id: profile.id.toString(),
          image: profile.image,
        }
      },
    },
  ],
}
