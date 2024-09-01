import React, { useEffect,useState } from 'react'
import { Problem } from '../types'
import axios from "axios"


const Description:React.FC<{problemId : string}> = ({problemId}) => {

    const [problem,setProblem] = useState<Problem>({
        Title:"",
        Description:"",
        Pid: 0,
        Examples:[{input:"",output:""}],
    });
    useEffect(() => {
        async function fetchAPI(){
            const res = await axios.get(
                `http://localhost:3050/problem/${problemId}`
            )
            setProblem(res.data);
        }
        fetchAPI();
    },[problemId])

  return (
    <div>
        {problem.Pid == 0? <p className='flex h-96 w-full justify-center items-center font-semibold'>Loading...</p>:
        <div>
        <h1 className="mt-10 text-3xl font-semibold">{problem.Pid}.{problem.Title}</h1>
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
        </div>
  )
}

export default Description
