import { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface User {}
  /**
   * Usually contains information about the provider being used
   * and also extends `TokenSet`, which is different tokens returned by OAuth Providers.
   */
  interface Account {}
  /** The OAuth profile returned from your provider */
  interface Profile {}
  interface Session {
    user: {
      address: string
    } & DefaultSession['user']
  }
  interface Credentials {
    email: string
    password: string
  }
}
