"use client"
import Link from "next/link"
import stylesbg from "../styles/background.module.css"
import style from "../styles/input.module.css"
import { motion } from "motion/react"

const textVariant = {

  hidden: { opacity: 0, x: -30 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),

}
const buttonVariant = {

  hidden: { opacity: 0 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.3,
      ease: "easeOut",
    },
  }),

}



const About = () => {
  return (
    <section id="about" className={`flex flex-col-reverse md:flex-row md:justify-around justify-center md:px-20 sm:px-10 px-8 font-montserrat h-[100vh] ${stylesbg.anibg} items-center`}>

      <div className="left flex flex-col gap-3 bg-black/30 p-10 md:w-[43rem] w-full md:h-[26rem] h-[44vh] rounded-xl backdrop-blur-2xl md:justify-around overflow-x-scroll">
        <motion.h1
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          custom={0}
          className="font-extrabold md:text-5xl text-3xl"
        >
          Hello I'm,
          <motion.div
            variants={textVariant}
            initial="hidden"
            whileInView="show"
            custom={1}
            className="text-transparent bg-clip-text bg-linear-90 from-appricon-500 to-cherry-500"
          >
            Aislx Flames
          </motion.div>
        </motion.h1>
        <motion.p
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          custom={2}
          className=" text-justify text-gray-300 whitespace-nowarp text-sm "
        >
          I am a full-stack developer with a strong command of modern web and backend technologies. I specialize in building scalable and responsive applications using frameworks like Next.js for the frontend and Python for backend services. My expertise also includes working with JavaScript, MongoDB, and Java, allowing me to develop robust, end-to-end solutions. I’m comfortable handling everything from database design to user interface development, and I enjoy solving complex problems by combining clean code with practical architecture.
        </motion.p>
        <div className="flex gap-5">
          <motion.button
            variants={buttonVariant}
            initial="hidden"
            whileInView="show"
            custom={3}
            className="text-sm font-bold bg-linear-120 from-appricon-500 to-cherry-500 py-2 px-4 rounded-xl hover:scale-105 transition-all duration-200 ease hover:shadow-xl hover:shadow-appricon-500 flex justify-center items-center gap-3"
          >
            DownloadCV
            <img width={20} src="/download.svg" />
          </motion.button>
          <Link href="#portfolio">
            <motion.button
              variants={buttonVariant}
              initial="hidden"
              whileInView="show"
              custom={4}
              className="text-sm font-bold bg-linear-120 from-black/50 to-gray-950/40 py-2 px-4 rounded-xl hover:sca ffle-105 transition-all duration-200 ease hover:shadow-xl hover:shadow-cherry-500 flex justify-center gap-4 border-2 border-appricon-500"
            >
              Projects
              <img width={20} src="/projects.svg" alt="" />
            </motion.button>
          </Link>
        </div>

      </div>
      <div className="right">
        <div className={`${style.profile} ${style.float} opacity-80 bg-black md:w-[20em] md:h-[20em] w-[18em] h-[18em] rounded-full`}>
          <motion.div className="overflow-hidden bg-red-800 h-full rounded-full"
          >
            <img className="w-full" src="/profile.png" alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
