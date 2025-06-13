import styles from '../styles/input.module.css'
import stylesbg from "../styles/background.module.css"
import { TypeAnimation } from 'react-type-animation'
import { Spotify } from 'react-spotify-embed'
import Link from 'next/link'

const Home = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col md:justify-around justify-center md:px-20 sm:px-10 px-5 font-montserrat h-[100vh] ${stylesbg.anibg} items-center`}>
      <div className="left relative flex flex-col gap-5">
        <div className='z-10 flex flex-col gap-5 md:items-start items-center'>
          <h1 className="font-extrabold md:text-6xl text-6xl">
            <TypeAnimation
              sequence={[
                'Frontend',
                2000,
                'Backend',
                2000,
                'Fullstack',
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
            />
            <div className="text-transparent bg-clip-text bg-linear-150 from-appricon-500 to-cherry-500">
              Developer
            </div>
          </h1>

          <p className="text-wrap md:w-[60%] w-[90%] md:block text-[0.9rem] text-gray-300">
            Hey I am Aislx, a Fullstack Developer with a passion for creating dynamic and responsive web applications. I specialize in building scalable and efficient solutions using modern technologies like Next.js, JavaScript, MongoDB, and Python. Let's bring your ideas to life!
          </p>


          <ul className="menubtn flex  gap-4 md:text-sm text-xs font-bold text-gray-300">
            <li>Next Js</li>
            <li>Java Script</li>
            <li>Mongo DB</li>
            <li>Python</li>
          </ul>


          <div className='flex gap-6 z-10 justify-center'>

            <Link href="#portfolio">
              <button className='text-sm font-bold bg-[#090909] py-2 px-6 rounded-xl flex items-center gap-2 hover:scale-105 hover:shadow-xl hover:shadow-appricon-500 transition-[color,box-shadow,scale] duration-300'>
                Projects
                <img width={24} src="/projects.svg" alt="" />
              </button>
            </Link>
            <Link href="#contact">
            <button className='text-sm font-bold bg-[#090909] py-2 px-6 rounded-xl flex items-center gap-2 hover:scale-105 hover:shadow-xl hover:shadow-cherry-500 transition-[color,box-shadow,scale] duration-300'>
              Contact
              <img width={24} src="/contact.svg" alt="" />
            </button>
            </Link>
          </div>
        </div>
        <div className='bg-appricon-500/30 rounded-full h-[30em] w-[38em] absolute top-[-10%] left-[-30%] blur-2xl'></div>
      </div>

      <div className="right relative md:block flex flex-col justify-center items-center">
        <img className={`${styles.float} w-[40vw] md:w-[60vw]`} src="/computer.png" alt="" />
        <div className='bg-cherry-500/30 rounded-full h-[28em] w-[25em] absolute top-0 left-0 blur-2xl'></div>
        <div className='rounded-xl overflow-hidden opacity-60 bg-black/10 backdrop-blur-2xl'>
          <Spotify wide className='z-10 b-10' link="https://open.spotify.com/track/23Jw6HlYfuhyllJhm3WPSc?si=9539c6b08d0a42f7" />
        </div>

      </div>

    </section>
  )
}

export default Home
