import { FaRegCircleCheck } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { VscError } from "react-icons/vsc";
import { codingAreaProps } from "../types";
import { DarkThemeContext } from "../context";
import { useContext } from "react";

const Testcases = ({loading, results} : codingAreaProps) => {
  const {darkTheme} = useContext(DarkThemeContext)
  return (
    <div className={`${darkTheme? "dark" :"light"} h-24 mt-5 mr-5 rounded-lg flex items-center px-5 justify-evenly`}>
      <div className="h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (results[0]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>
      <div className="h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (results[1]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>
      <div className="h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (results[2]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>
      <div className="h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (results[3]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>
      <div className="h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (results[4]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>
      <div className="h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (results[5]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>

    </div>
  )
}

export default Testcases
