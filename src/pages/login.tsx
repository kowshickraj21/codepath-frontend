import google from '../assets/google.svg'
import github from '../assets/github.svg'
const Login = () => {
  return (
    <div className="h-svh w-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="w-1/4 h-1/3 py-8 bg-white flex flex-col justify-evenly items-center rounded-md">
        <a href="http://localhost:3050/auth/google" className="border-2 border-black px-5 py-2 flex items-center"><img src={google} alt="Google" className='pr-2'/> Continue with Google</a>
        <p>or</p>
        <a href="http://localhost:3050/auth/github" className="border-2 border-black px-5 py-2 flex items-center"><img src={github} alt="Google" className='pr-2'/> Continue with Github</a>
        </div>
        </div>
  )
}

export default Login
