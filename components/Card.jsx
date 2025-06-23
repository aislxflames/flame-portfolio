const Card = (props) => {
  return (
    <div className="bg-black/60 backdrop-blur-2xl h-[22em] w-[20em] rounded-xl flex flex-col justify-between p-4 gap-4 overflow-scroll">
      <img className="w-full h-[45%] rounded-xl" src={props.previewImg} alt="" />
      <h1 className="text-xl font-bold">{props.title}</h1>
      <p className="text-gray-400 text-sm">{props.description}</p>
      <div className="flex justify-end text-sm">
        <a href={props.url} target="blank">
          <button className="bg-black px-3 py-2 rounded-xl  hover:scale-105 hover:shadow-xl hover:shadow-appricon-500 transition-all">Visit Project</button>
        </a>
      </div>
    </div>
  )
}

export default Card
