import LoginBtn from "@/components/Auth/LoginBtn"
import stylesbg from "@/styles/background.module.css"

const Login = () => {
  return (
    <section className={`flex justify-around px-20 font-montserrat h-[100vh] ${stylesbg.anibg} items-center`}>
<LoginBtn />
    </section>
  )
}

export default Login 
