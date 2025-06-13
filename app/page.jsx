"use client"
import { useEffect } from "react"
import About from "@/sections/About"
import Home from "@/sections/Home"
import Portfolio from "@/sections/Portfolio"
import Contact from "@/sections/Contact"


const page = () => {
  useEffect(() => {
    {
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        const locomotiveScroll = new LocomotiveScroll();
      }
    }
  }, [])

  return (
    <main className="snap-y snap-mandatory h-screen overflow-y-scroll">
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </main>
  )
}

export default page
