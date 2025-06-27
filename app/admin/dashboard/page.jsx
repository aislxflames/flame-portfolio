import stylesbg from "@/styles/background.module.css"
import Sidebar from "./components/Sidebar"

const Dashboard = () => {
  return (
       <section className={`flex justify-between px-20 font-montserrat h-[100vh] ${stylesbg.anibg} items-center`}>
      <Sidebar/>
    </section>  )
}

export default Dashboard
