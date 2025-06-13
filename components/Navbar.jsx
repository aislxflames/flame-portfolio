"use client"
import { useRouter } from "next/navigation"

const Navbar = () => {
  const router = useRouter()
  return (
    <nav className="fixed w-[100vw] top-0 bg-black/20 backdrop-blur-2xl flex justify-around items-center h-16 z-50">
      <label htmlFor="logo" className="text-2xl font-bold" onClick={() => { router.push('/') }}>Aislx <span className="text-transparent bg-clip-text bg-linear-90 from-appricon-500 to-cherry-500">Flames</span></label>


      <ul className="flex gap-5 text-sm [&>li]:hover:scale-105 [&>li]:cursor-pointer [&>li]:hover:font-bold [&>li]:transition-[color,scale] [&>li]:duration-300 [&>li]:ease-in-out [&>li]:hover:border-b-2 [&>li]:hover:border-b-appricon-500 [&>li]:hover:text-cherry-500">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
