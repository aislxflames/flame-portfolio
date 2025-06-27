import { FaCode, FaGithub, FaLink, FaPeopleCarry } from "react-icons/fa"
import styles from '@/styles/background2.module.css'
import { TypeAnimation } from "react-type-animation"
import { motion } from "motion/react"
import Link from "next/link"

const textVarient = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut"
    }
  })
}

const SplashScreen = ({ visible }) => {
  return (
    <div className={`fixed flex flex-col z-[9999] justify-center items-center inset-0 bg-linear-320 from-black via-black to-red-950 text-white ${styles.gbg} gap-10 transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"
      }`}>

      {/* Blurry Shadow */}
      <div className="absolute top-[20%] h-0 w-[60rem] right-[-5%] shadow-[0_0_900px_20px_red] -rotate-[300deg] -z-1"></div>

      <div className="flex text-3xl gap-4">
        <motion.div variants={textVarient} animate="show" initial="hidden" custom={0} className="bg-red-800 p-2 shadow-[0_0_30px_red] rounded-full">
          <FaCode />
        </motion.div>

        <motion.div variants={textVarient} animate="show" initial="hidden" custom={1} className="bg-red-800 p-2 shadow-[0_0_30px_red] rounded-full">
          <FaPeopleCarry />
        </motion.div>
        <Link href="https://github.com/aislxflames" target="_blank">
          <motion.div variants={textVarient} animate="show" initial="hidden" custom={2} className="bg-red-800 p-2 shadow-[0_0_30px_red] rounded-full">
            <FaGithub />
          </motion.div>
        </Link>
      </div>
      <motion.h1 variants={textVarient} initial="hidden" animate="show" custom={0} className="text-6xl font-[900] text-center">Welcome to, <br />
        <motion.span variants={textVarient} initial="hidden" animate="show" custom={1} className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 text-shadow-[0_0_30px_rgba(600,0,0,0.6)]">Aislx's </motion.span>
        <motion.span variants={textVarient} initial="hidden" animate="show" custom={2} className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pink-600 text-shadow-[0_0_30px_rgba(600,0,0,0.6)]">Portfolio</motion.span>
      </motion.h1>

      <motion.span variants={textVarient} initial="hidden" animate="show" custom={3} className="flex items-center justify-center gap-3 bg-red-950/60 backdrop-blur-2xl rounded-xl py-1 px-3 shadow-[0_0px_60px_brown]">
        <FaLink />
        <TypeAnimation
          sequence={[
            'portfolio.theflames.fun',
          ]}
          wrapper="span"
          speed={50}
          repeat={1}
        />
      </motion.span> 

    </div>
  )
}

export default SplashScreen
