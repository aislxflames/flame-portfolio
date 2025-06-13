"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation"

export default function LoginBtn() {
  const router = useRouter()
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }

  return (
    <>
      Not signed in <br />
      <button
        className="bg-slate-900/20 py-2 px-4 rounded-xl"
        onClick={() => signIn('github')}
      >
        Sign in
      </button>
    </>
  )
}

