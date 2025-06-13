const CertificateCard = (props) => {
  return (
    <div className="bg-black/60 backdrop-blur-2xl p-2 w-[20em] h-[13em] ">
      <div style={{
        backgroundImage: `url(${props.image})`
      }} className="bg-cover bg-center h-full w-full">
      </div>
    </div>
  )
}

export default CertificateCard
