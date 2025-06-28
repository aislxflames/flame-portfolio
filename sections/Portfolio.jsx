"use client"
import { useState } from "react";
import { motion } from "motion/react";

import stylesbg from "../styles/background.module.css"
import Projects from "@/components/Projects"
import Certificate from "@/components/Certificate";
import Codestack from "@/components/Codestack";
import { TypeAnimation } from "react-type-animation";

const middleVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    },
  })
}

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");
  return (
    <section id="portfolio" className={`portfolio overflow-y-scroll overflow-hidden flex justify-around md:px-20 font-montserrat h-[100vh] ${stylesbg.anibg} items-center `}>
      <div className=" flex flex-col items-center md:mt-60 mt-80 justify-center gap-2 ">
        <motion.h1 variants={middleVariant} initial="hidden" whileInView="show" custom={0} className="text-shadow-[0_0_25px_red]  md:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-linear-90 from-appricon-500 to-cherry-500">Portfolio Showcase</motion.h1>
        <motion.p variants={middleVariant} initial="hidden" whileInView="show" custom={1} className="text-sm md:w-[70%] w-[90%] text-center">
          <TypeAnimation
            sequence={[
              'Showcasign my work and achievements, including projects, certificates, and skills acquired through Codestack.',
            ]}
          />
        </motion.p>

        <div className="bg-black/20 backdrop-blur-2xl md:w-[40em] w-[20em] text-[16px] h-[5em] rounded-xl flex justify-around items-center">
          <button onClick={() => { setActiveTab("projects") }} className={`bg-black/20 hover:bg-red-900/50 w-[90%] flex flex-col items-center justify-center  h-[90%] rounded-l-xl transition-all duration-300 ${activeTab === 'projects' ? 'bg-red-800' : ''}`}>
            <img width={20} src="/projects.svg" alt="" />
            Projects
          </button>
          <button onClick={() => { setActiveTab("certificate") }} className={`bg-black/20 hover:bg-red-900/50 w-[90%] flex flex-col items-center justify-center  h-[90%] transition-all duration-300 ${activeTab === 'certificate' ? 'bg-red-800' : ''}`}>
            <img width={20} src="/certificate.svg" alt="" />
            Certificate
          </button>
          <button onClick={() => { setActiveTab("skills") }} className={`bg-black/20 hover:bg-red-900/50 w-[90%] flex flex-col items-center justify-center  h-[90%] rounded-r-xl transition-all duration-300 ${activeTab === 'skills' ? 'bg-red-800' : ''}`}>
            <img width={20} src="/skills.svg" alt="" />
            Codestack
          </button>
        </div>

        <div className="content flex p-8">
          {activeTab === 'projects' && <Projects />}
          {activeTab === 'certificate' && <Certificate />}
          {activeTab === 'skills' && <Codestack />}

        </div>
      </div>
    </section>
  )
}

export default Portfolio
