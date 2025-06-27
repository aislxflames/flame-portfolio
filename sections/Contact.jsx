import stylesbg from "../styles/background.module.css"
import { easeIn, motion } from "motion/react"

const Contact = () => {
  return (
    <section id="contact" className={`flex justify-around md:px-20 px-8 font-montserrat h-[100vh] ${stylesbg.anibg} items-center`}>
      <motion.div
        initial={{
          opacity: 0,
          y: 40
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition:{
            delay: 0.1,
            duration: 0.5,
            ease: "easeIn"
          }
        }}
        className="bg-black/40 backdrop-blur-2xl w-[25em] h-[30em] p-6 rounded-xl mt-20 gap-6 flex flex-col"
      >
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-linear-270 from-appricon-500 via-pink-800 to-cherry-500">Get me hired</h1>
        <p className="text-gray-400 text-sm">You can directly email me from here.</p>
        <div className="flex flex-col gap-4">
          <div className="relative flex items-center">
            <img width={26} className="absolute opacity-80 top-[19%] left-[1%]" src="/person.svg" alt="" />
            <input className="px-2 w-full py-4 pl-10 outline-0 bg-gray-950/30 rounded-xl" type="text" placeholder="Username" />
          </div>
          <div className="relative flex items-center">
            <img width={26} className="absolute opacity-80 top-[19%] left-[1%]" src="/email.svg" alt="" />
            <input className="px-2 w-full py-4 pl-10 outline-0 bg-gray-950/30 rounded-xl" type="email" placeholder="Your Email" />
          </div>
          <div className="relative flex items-center">
            <img width={26} className="absolute opacity-80 top-[8%] left-[2%]" src="/comment.svg" alt="" />
            <textarea className="px-2 w-full h-[12em] max-h-[12em] py-4 pl-10 outline-0 bg-gray-950/30 rounded-xl" type="email" placeholder="Enter Message" />
          </div>
        </div>
      </motion.div>

    </section>
  )
}

export default Contact
