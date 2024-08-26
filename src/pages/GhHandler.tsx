import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import handleReq from "../functions/ghHandler";
const GhHandler = () => {
    const navigate = useNavigate();
    const [ searchParams ] = useSearchParams();
    const code = searchParams.get("code");

    useEffect(() => {
        if(localStorage.getItem("authToken")){
            navigate("/");
        }
        async function handleGH(){
            if(code){
            const res = await handleReq(code);
            if(res){
                navigate("/");
            }else{
                navigate("/login")
            }
        }
        navigate("/login");
        }
        handleGH();
    },[code, navigate, searchParams])
    
  return (
    <div className="flex justify-center items-center h-svh">
      Loading...
    </div>
  )
}

export default GhHandler
