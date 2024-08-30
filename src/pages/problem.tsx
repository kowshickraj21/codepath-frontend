import { useState } from "react"
import Navbar from "../components/navbar"
import { useParams } from "react-router-dom"
import CodingArea from "../components/codingArea"
import Description from "../components/description"
import Submissions from "../components/submissions"


const Problem = () => {
  const [page,setPage] = useState("description");
  const [code, setCode] = useState('');
  const { problemId } = useParams()


    
  return (
    <div className="bg-black bg-opacity-10">
    <Navbar />
    <div className="flex w-full h-full">
        <div className="w-1/2 p-5 pb-10">
        <div className="border-2 border-black h-full w-full p-5 pt-0 rounded-2xl">
        <div className="flex gap-3 w-full border-b border-black">
          <p className={`cursor-pointer font-semibold py-2 border-b-2 ${page == "description"?"border-black":null}`} onClick={() => setPage("description")}>Description</p>
          <p className={`cursor-pointer font-semibold py-2 border-b-2 ${page == "submissions"?"border-black":null}`} onClick={() => setPage("submissions")}>Submissions</p>
        </div>
        {page == "description" && problemId? <Description problemId={problemId} />:(problemId)?<Submissions id={problemId} setCode={setCode}/> : null}
        </div>
        </div>
      {problemId != undefined? <CodingArea id={problemId} code={code} setCode={setCode}/> : null}
    </div>
    </div>
  )
}

export default Problem
