import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { login } from '@/services/api'

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text', placeholder: 'Username' },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: '********',
        },
      },
      async authorize(credentials) {
        const user = {
          username: credentials.username,
          password: credentials.password,
        }

        const userLog = await login(user)
        if (!userLog.ok) throw new Error(userLog.error)
        console.log(userLog)
        return userLog
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user }
    },
    async session({ session, token }) {
      session.user = token
      return session
    },
  },
  // session: {
  //   jwt: true,
  // },
  // jwt: {
  //   secret: 'secret',
  //   encryption: true,
  // },
  pages: {
    signIn: '/login',
  },
  secret: process.env.SECRET,
}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
