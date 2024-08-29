import { FaRegCircleCheck } from "react-icons/fa6";
import { MdAccessTime } from "react-icons/md";
import { VscError } from "react-icons/vsc";

interface Status {
  id: number;
  description: string;
}

interface codingAreaProps {
  loading : boolean
  result : Status[] 
}

const Testcases = ({loading, result} : codingAreaProps) => {

  return (
    <div className="bg-white h-24 mt-5 mr-5 rounded-lg flex items-center px-5 justify-evenly" >
      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
        {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (result[0]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>

      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
      {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (result[1]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>

      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
      {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (result[2]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>

      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
      {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (result[3]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>

      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
      {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (result[4]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>

      <div className="bg-white h-16 w-16 border-2 rounded-xl shadow-md flex justify-center items-center flex-col">
      {(loading)?<MdAccessTime color="orange" className="text-2xl"/>:
        (result[5]?.id == 1)?<FaRegCircleCheck color="green" className="text-2xl"/>
        :<VscError color="red" className="text-3xl"/>}
      </div>
    </div>
  )
}

export default Testcases
