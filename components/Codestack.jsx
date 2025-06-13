import CodestackCard from "./CodestackCard"

const Codestack = () => {
  return (
    <div className="grid lg:grid-cols-8 md:grid-cols-6 sm:grid-cols-4 grid-cols-2 overflow-y-scroll scroll gap-3 h-[50vh]">
      <CodestackCard
        icon="/html.svg"
        name="Html 5"
      />
      <CodestackCard
        icon="/css.svg"
        name="Css 3"
      />
      <CodestackCard
        icon="/javascript.svg"
        name="JavaScript"
      />
      <CodestackCard
        icon="/nextjs.svg"
        name="Next.js"
      />
      <CodestackCard
        icon="/react.svg"
        name="React.js"
      />
      <CodestackCard
        icon="/mongodb.svg"
        name="MongoDB"
      />
      <CodestackCard
        icon="/tailwind.svg"
        name="Tailwind"
      />
      <CodestackCard
        icon="/python.svg"
        name="Python"
      />

    </div>
  )
}

export default Codestack
