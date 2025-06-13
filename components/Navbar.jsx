"use client"
import { useRouter } from "next/navigation"
import { useEffect, useRef, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const sidebarRef = useRef();
  useEffect(()=>{
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setSidebar(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [sidebar])
  const router = useRouter()
  return (
    <nav className="fixed w-[100vw] top-0 bg-black/20 backdrop-blur-2xl flex justify-around items-center h-16 z-50">
      <label htmlFor="logo" className="text-2xl font-bold" onClick={() => { router.push('/') }}>Aislx <span className="text-transparent bg-clip-text bg-linear-90 from-appricon-500 to-cherry-500">Flames</span></label>


      <ul className="md:flex sm:flex hidden gap-5 text-sm [&>li]:hover:scale-105 [&>li]:cursor-pointer [&>li]:hover:font-bold [&>li]:transition-[color,scale] [&>li]:duration-300 [&>li]:ease-in-out [&>li]:hover:border-b-2 [&>li]:hover:border-b-appricon-500 [&>li]:hover:text-cherry-500">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <label htmlFor="menu" className="md:hidden sm:hidden flex items-center justify-center text-2xl cursor-pointer">
        <HiOutlineMenuAlt3 onClick={() => { setSidebar(!sidebar) }} />
      </label>

      <ul ref={sidebarRef} className={`${sidebar ? 'flex translate-x-0' : 'flex translate-x-[40rem]'} transition-transform ease-in duration-300 flex-col gap-5 text-sm [&>li]:hover:scale-105 [&>li]:cursor-pointer [&>li]:hover:font-bold [&>li]:transition-[color,scale] [&>li]:duration-300 [&>li]:ease-in-out [&>li]:hover:border-b-2 [&>li]:hover:border-b-appricon-500/50 [&>li]:hover:text-cherry-500 top-[4em] right-[1em]  z-50 absolute justify-center items-center bg-appricon-500/50 backdrop-blur-2xl w-[15em] rounded-xl p-5 `}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>


    </nav>
  )
}

export default Navbar
