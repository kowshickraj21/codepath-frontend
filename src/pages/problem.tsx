import { useState,useEffect } from "react"
import Navbar from "../components/navbar"
import { useParams } from "react-router-dom"
import axios from "axios"
import CodingArea from "../components/codingArea"

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
    
  return (
    <div className="bg-black bg-opacity-10">
    <Navbar />
    <div className="flex w-full h-full">
    {problem.Title == ""?
    <p className="m-auto">Loading...</p>:
        <div className="w-1/2 p-10 lg:pr-20">
        <h1 className="mt-10 text-black text-3xl font-semibold">{problem.Pid}.{problem.Title}</h1>
        <p className="mt-5">{problem.Description}</p>
        <div className="mt-10 flex flex-col gap-7">
        {problem.Examples.map((example,index) => {
          return(
            <div key={index}>
              <h2 className="text-lg font-medium mb-3">Example {index+1}:</h2>
              <div className="flex flex-col gap-2">
                <p>Input: </p>
                 <p className="bg-slate-900 pt-3 pl-3 text-white h-14"> {example.input}</p>
                <p>Output: </p>
                <p className="bg-slate-900 pt-3 pl-3 text-white h-14"> {example.output}</p>
              </div>
            </div>
          )
        })}
        </div>
        </div>
    }
    {problemId != undefined? <CodingArea id={problemId}/> : null }
    </div>
    </div>
  )
}

export default Problem
