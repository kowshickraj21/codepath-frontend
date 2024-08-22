import { useContext } from "react"
import Navbar from "../components/navbar"
import { UserContext } from "../context"
const Home = () => {
  const { User } = useContext(UserContext)
  return (
    <div className="bg-black bg-opacity-5 h-svh">
        <Navbar />
        <div className="">
          <p className="mt-10 ml-10 text-2xl font-semibold">Welcome, <span className="text-blue-400">{User.name}</span></p>
          <div className="mt-20 w-full px-20 flex flex-col">
          <div className="w-full bg-white h-16 border flex items-center px-5">
            <div className="flex gap-10">
            <p className="text-lg font-medium">1 </p>
            <p className="text-blue-600 text-lg font-medium">Two Sum</p>
            </div>
          </div>
          </div>
        </div>
    </div>
  )
}

export default Home
