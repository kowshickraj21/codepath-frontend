import { useState,useEffect } from "react"
import Navbar from "../components/navbar"
import { useParams } from "react-router-dom"
import axios from "axios"

const Problem = () => {
    const {problemId} = useParams()
    const [problem,setProblem] = useState({
        Title:"",
        Description:"",
        Pid: 0,
        Examples:[{input:"",output:""}],
        Testcases:[]
    });
    useEffect(() => {
        async function fetchAPI(){
            const res = await axios.get(
                `http://localhost:3050/problem/${problemId}`
            )
            setProblem(res.data);
        }
        fetchAPI();
    },[])

    console.log(problem)
  return (
    <div className="bg-black bg-opacity-10">
    <Navbar />
    <div className="flex w-full h-svh">
    {problem.Title == ""?
    <p className="m-auto">Loading...</p>:
        <div className="w-1/2 p-10 border-r-2 border-black">
        <h1 className="mt-10 text-black text-3xl font-semibold">{problem.Pid}.{problem.Title}</h1>
        <p className="mt-5">{problem.Description}</p>
        <div className="mt-10 flex flex-col gap-5">
        {problem.Examples.map((example,index) => {
          return(
            <div key={index}>
              <h2>Example {index+1}:</h2>
              <div>
                <p>Input: {example.input}</p>
                <p>Output: {example.output}</p>
              </div>
            </div>
          )
        })}
        </div>
        </div>
    }
    </div>
    </div>
  )
}

export default Problem
