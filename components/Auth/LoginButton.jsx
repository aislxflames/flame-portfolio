"use client"
import { signIn } from 'next-auth/react'
import { FaGithubAlt } from 'react-icons/fa'

const LoginButton = () => {
  return (
    <>
      <button
        onClick={() => {signIn('github')}}
        className='flex items-center text-xl font-semibold gap-3 bg-[black]/10 hover:bg-[#484848]/20 outline-1 outline-gray-400 backdrop-blur-2xl h-10 px-10 rounded-xl transition-all duration-150 linear'
      >
        <FaGithubAlt />
        Login with github
      </button>
    </>
  )
}

export default LoginButton
