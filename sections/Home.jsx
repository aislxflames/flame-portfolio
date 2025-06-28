"use client";

import styles from '../styles/input.module.css';
import stylesbg from "../styles/background.module.css";
import { TypeAnimation } from 'react-type-animation';
import { Spotify } from 'react-spotify-embed';
import { motion } from "framer-motion";
import Link from 'next/link';

// Slide-in from left (for texts)
const textVariant = {
  hidden: { opacity: 0, x: -30 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.4 + i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

// Slide-in from bottom (for buttons)
const buttonVariant = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 2.4 + i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const rightVariant = {
  hidden: { oapcity: 0, x: 30 },
  show: (i = 0) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 2.4 + i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
}

const Home = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col-reverse md:justify-around justify-center md:px-20 sm:px-10 px-5 font-montserrat h-[100vh] ${stylesbg.anibg} items-center overflow-hidden`}
    >
      <div className="left relative flex flex-col gap-5">
        <div className='z-10 flex flex-col gap-5 md:items-start items-center'>

          {/* Title */}
          <motion.h1
            variants={textVariant}
            initial="hidden"
            animate="show"
            viewport={{once: true}}
            custom={0}
            className="font-extrabold md:text-6xl text-5xl text-start w-[90%]"
          >
            <TypeAnimation
              sequence={['Frontend', 2000, 'Backend', 2000, 'Fullstack', 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
            <motion.div
              variants={textVariant}
              initial="hidden"
              animate="show"
              custom={1}
              className="text-transparent bg-clip-text bg-linear-150 from-appricon-500 to-cherry-500 font-extrabold md:text-6xl text-5xl text-start w-[90%]"
            >
              Developer
            </motion.div>
          </motion.h1>



          {/* Paragraph */}
          <motion.p
            variants={textVariant}
            initial="hidden"
            animate="show"
            custom={2}
            className="text-wrap md:w-[60%] w-[90%] md:block md:text-sm text-[0.8rem] text-gray-300"
          >
            Hey I am Aislx, a Fullstack Developer with a passion for creating dynamic and responsive web applications. I specialize in building scalable and efficient solutions using modern technologies like Next.js, JavaScript, MongoDB, and Python. Let's bring your ideas to life!
          </motion.p>

          {/* Skills List */}
          <motion.ul
            variants={buttonVariant}
            initial="hidden"
            animate="show"
            custom={3}
            className="menubtn flex gap-4 md:text-sm text-xs font-bold text-gray-300"
          >
            <li>Next Js</li>
            <li>Java Script</li>
            <li>Mongo DB</li>
            <li>Python</li>
          </motion.ul>

          {/* Buttons */}
          <div className='flex gap-6 z-10 justify-center'>
            <motion.div
              variants={buttonVariant}
              initial="hidden"
              animate="show"
              custom={4}
            >
              <Link href="#portfolio">
                <button className='text-sm font-bold bg-[#090909] py-2 px-6 rounded-xl flex items-center gap-2 hover:scale-105 hover:shadow-xl hover:shadow-appricon-500 transition-[color,box-shadow,scale] duration-300'>
                  Projects
                  <img width={24} src="/projects.svg" alt="" />
                </button>
              </Link>
            </motion.div>

            <motion.div
              variants={buttonVariant}
              initial="hidden"
              animate="show"
              custom={5}
            >
              <Link href="#contact">
                <button className='text-sm font-bold bg-[#090909] py-2 px-6 rounded-xl flex items-center gap-2 hover:scale-105 hover:shadow-xl hover:shadow-cherry-500 transition-[color,box-shadow,scale] duration-300'>
                  Contact
                  <img width={24} src="/contact.svg" alt="" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right side: Image + Spotify */}
      <div className="right relative md:block flex flex-col justify-center items-center">

        <motion.div
          variants={rightVariant}
          initial="hidden"
          animate="show"
          custom={1}
        >
          <img

            className={`${styles.float} w-[22rem] md:w-[40rem] lg:w-[45rem]`}
            src="/computer.png"
            alt=""
          />
        </motion.div>

        <motion.div
          variants={rightVariant}
          initial="hidden"
          animate="show"
          custom={2}
          className='rounded-xl overflow-hidden opacity-60 bg-black/10 backdrop-blur-2xl'
        >
          <Spotify
            wide
            className='z-10 b-10'
            link="https://open.spotify.com/track/23Jw6HlYfuhyllJhm3WPSc?si=9539c6b08d0a42f7"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;

