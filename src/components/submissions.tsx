import axios from "axios"
import { useEffect, useState } from "react"

interface Submissions{
    Sid : string,
    Pid : number,
    Email : string,
    Language : string,
    Code : string,
    Status : string,
}

const Submissions:React.FC<{id : string, setCode : React.Dispatch<React.SetStateAction<string>>}> = ({id,setCode}) => {
    const [submissions,setSubmissions] = useState<Submissions[]>([]);
    useEffect(() => {
        const fetchSubmissions = async() => {
            const res = await axios.get(
                `http://localhost:3050/submission/${id}`,
                {
                    headers: {
                        'user': localStorage.getItem("authToken"),
                    },
                }
            )
            setSubmissions(res.data)
        }
        fetchSubmissions()
    },[id])

  return (
    <div className="pt-3 pl-8 pr-12 w-full">
        {submissions == null? <p className='flex h-96 w-full justify-center items-center font-semibold'>Loading...</p>:
        submissions.length == 0?<p className='flex h-96 w-full justify-center items-center font-semibold'>No Solutions Found</p>:
        <div>
        <div className="flex justify-between items-center h-12 border-2 border-black px-10 w-full">
            <p>Status</p>
            <p>Language</p>
            <p>View</p>
        </div>
        {submissions.map((submission,index) => {
            return (
            <div className="flex justify-between px-9 items-center h-12" key={index}>
            <p>{submission.Status}</p>
            <p>{submission?.Language}</p>
            <p className="text-blue-700 underline cursor-pointer" onClick={() => setCode(submissions[index].Code)}>View</p>
        </div>
            )
        })}
        </div>
        }
    </div>
  )
}

export default Submissions
