import { IoMoon } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-10 h-14 shadow-lg">

        <p>Logo</p>

        <form className="border-2 py-1 px-3 flex w-1/3">
            <input type="text" className="focus:outline-none w-full pl-2" placeholder="Search"/>
            <button className="pl-5 pr-2 border-l-2"><FaSearch /></button>
        </form>

        <div className="flex gap-7 items-center">
            <IoMoon className="text-2xl" />
            <div className="bg-black rounded-full h-10 w-10"></div>
        </div>
    </div>
  )
}

export default Navbar
