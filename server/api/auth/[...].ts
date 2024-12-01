import { NuxtAuthHandler } from '#auth'
import GithubProvider from '@auth/core/providers/github'

export default NuxtAuthHandler({
  secret: process.env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    async session({ session, token }) {
      return session
    },
    async jwt({ token, account, profile }) {
      return token
    }
  },
  pages: {
    signIn: '/login',
    signOut: '/'
  }
})