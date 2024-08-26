import GoogleButton from '../components/googleButton'
import github from '../assets/github.svg'
import { getToken } from '../functions/Token'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
const Login = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if(getToken("authToken")){
      navigate('/');
    }
  },[navigate])

  return (
    <div className="h-svh w-full bg-black bg-opacity-50 flex justify-center items-center">
        <div className="w-1/4 h-1/3 py-8 bg-white flex flex-col justify-evenly items-center rounded-md">
        <GoogleButton />
        <p>or</p>
        <a href={`https://github.com/login/oauth/authorize?client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}`} className="border-2 border-black px-5 py-2 flex items-center"><img src={github} alt="Google" className='pr-2'/> Continue with Github</a>
        </div>
        </div>
  )
}

export default Login
