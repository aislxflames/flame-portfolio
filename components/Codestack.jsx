import CodestackCard from "./CodestackCard"
import skills from "@/libs/skills"
import { motion } from "motion/react"

const fadeInVariants = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.06,
      duration: 0.2
    }
  })
}

const Codestack = () => {
  return (
    <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 overflow-y-scroll scroll gap-3 h-[50vh]">
      {skills.map((s, i) => (
        <motion.div
          variants={fadeInVariants}
          initial="hidden"
          whileInView="show"
          custom={i}
        >
          <CodestackCard
            key={i}
            icon={s.icon}
            name={s.name}
          />
        </motion.div>
      ))}

    </div>
  )
}

export default Codestack
