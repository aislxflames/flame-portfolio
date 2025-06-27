import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

const handler = NextAuth({
  session: {
    strategy: "jwt"
  },
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        let role = "user"
        if (user.email === "proarghaop@gmail.com") {
          role = "admin";
        }
        token.role = role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.role = token.role
      }
      return session
    }
  }
})


export { handler as GET, handler as POST }
