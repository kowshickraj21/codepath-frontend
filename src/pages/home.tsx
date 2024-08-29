import { useContext, useEffect, useState } from "react"
import { FaRegCircleCheck } from "react-icons/fa6";
import Navbar from "../components/navbar"
import { UserContext } from "../context"
import { problems } from "../types";
import axios from "axios";
const Home = () => {
  const [ problems,setProblems ] = useState<problems[]>([]);
  const { User } = useContext(UserContext)

  useEffect(() => {
    const getProblems = async() => {
      const res = await axios.get('http://localhost:3050/problems')
      setProblems(res.data);
    }
    getProblems();
  },[])

  return (
    <div className="bg-black bg-opacity-5 h-svh">
        <Navbar />
        <div className="">
          <p className="mt-10 ml-10 text-2xl font-semibold">Welcome, <span className="text-blue-400">{User.name}</span></p>
          <div className="mt-20 w-full px-28 flex flex-col gap-3">
            {problems.map((problem,index) => {
              const finished = User.Problems.includes(problem.Pid)
              return(
              <a href={`/problem/${problem.Pid}`} className={`w-full ${finished?'bg-green-200':'bg-white'} bg-opacity-70 h-16 border border-black border-opacity-15 flex items-center px-5`} key={index}>
              <div className="flex items-center justify-between w-full">
              <div className="flex gap-5">
              <p className="text-lg font-medium mr-5">{problem.Pid}. </p>
              <p className="text-blue-600 text-lg font-medium">{problem.Title}</p>
              <p className=" text-sm bg-slate-100 pt-1 px-3 rounded-3xl font-medium">Dynamic Programming</p>
              </div>
              <div className="flex gap-10">
                <p className="text-orange-400 font-semibold">Medium</p>
                <FaRegCircleCheck className={`mr-3 text-3xl ${finished?'text-green-600':'text-gray-400'} opacity-80 hover:opacity-100`}/>
              </div>
              </div>
              </a>
              )})}
          </div>
        </div>
    </div>
  )
}

export default Home
