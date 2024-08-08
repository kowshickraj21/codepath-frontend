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
        Examples:[],
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
    <div>
    <Navbar />
    {problem.Title}
    </div>
  )
}

export default Problem
