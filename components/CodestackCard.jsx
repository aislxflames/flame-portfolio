const CodestackCard = (props) => {
  return (
    <div className="flex flex-col justify-start gap-3 items-center rounded-xl w-[7em] h-[9em] p-6 bg-black/20 backdrop-blur-2xl">
      <img width={90} src={props.icon} alt="" />
      <h4 className="text-base font-bold">{props.name}</h4>
    </div>
  )
}

export default CodestackCard
