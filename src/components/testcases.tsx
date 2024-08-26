// import { useState } from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { VscError } from "react-icons/vsc";

interface codingAreaProps {
  loading : boolean
}

const Testcases = ({loading} : codingAreaProps) => {

  return (
    <div className="bg-white h-24 mt-5 mr-5 rounded-lg flex items-center px-5 justify-evenly" >
      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        <VscError color="red" className="text-3xl"/>}
      </div>

      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        <FaRegCircleCheck color="green" className="text-2xl"/>}
      </div>

      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        <FaRegCircleCheck color="green" className="text-2xl"/>}
      </div>

      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        <FaRegCircleCheck color="green" className="text-2xl"/>}
      </div>

      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        <FaRegCircleCheck color="green" className="text-2xl"/>}
      </div>

      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        <FaRegCircleCheck color="green" className="text-2xl"/>}
      </div>
    </div>
  )
}

export default Testcases
