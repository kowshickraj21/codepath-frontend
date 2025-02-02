import React, { useEffect,useState } from 'react'
import { Problem } from '../types'
import axios from "axios"


const Description:React.FC<{problemId : string}> = ({problemId}) => {

    const [problem,setProblem] = useState<Problem>({
        title:"",
        description:"",
        pid: 0,
        examples:[{input:"",output:""}],
    });
    useEffect(() => {
        async function fetchAPI(){
            const res = await axios.get(
                `${import.meta.env.VITE_BACKEND_URL}/problem/${problemId}`
            )
            setProblem(res.data);
        }
        fetchAPI();
    },[problemId])

  return (
    <div>
        {problem.pid == 0? <p className='flex h-96 w-full justify-center items-center font-semibold'>Loading...</p>:
        <div>
        <h1 className="mt-10 text-3xl font-semibold">{problem.pid}.{problem.title}</h1>
        <p className="mt-5">{problem.description}</p>
        <div className="mt-10 flex flex-col gap-7">
        {problem.examples.map((example,index) => {
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
