import LoginButton from '@/components/Auth/LoginButton'
import styles from '@/styles/background.module.css'

const Login = () => {
  return (
    <div className={`${styles.anibg} flex justify-center items-center h-[100vh] w-full`}>
      <div className='flex flex-col items-center py-10 h-[30rem] w-[30rem] rounded-xl bg-[#090909]/40 backdrop-blur-2xl'>
        <h1 className='text-4xl font-bold'>Login / Register</h1>
        <div className='flex justify-center p-10 h-full'>
          <LoginButton/>
        </div>
      </div>
    </div>
  )
}

export default Login
