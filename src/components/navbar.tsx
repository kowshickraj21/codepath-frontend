import { IoMoon } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import codepath from "../assets/codepath.png"
import { useContext, useState } from "react";
import { DarkThemeContext, UserContext } from '../context'
import { delelteToken } from "../functions/Token";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menu,openMenu] = useState(false);
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);
  const { User } = useContext(UserContext);

  const logout = () => {
    delelteToken("authToken");
    navigate('/login');
  }

  return (
    <div className="flex justify-between items-center px-8 h-16 shadow-lg bg-white">

        <div className="h-10">
        <img src={codepath} alt="Logo" className="h-full w-full"/>
        </div>

        <form className="border-2 py-1 px-3 flex w-1/3">
            <input type="text" className="focus:outline-none w-full pl-2" placeholder="Search"/>
            <button className="pl-5 pr-2 border-l-2"><FaSearch /></button>
        </form>

        <div className="flex gap-7 items-center mr-2">
            <IoMoon className="text-2xl" onClick={() => setDarkTheme(!darkTheme)} />
            <img src={User.picture} className="bg-black rounded-full h-10 w-10" onClick={() => openMenu(!menu)} />
            <div className={`${menu?'absolute':'hidden'} top-16 right-10 mt-1 p-5 py-3 rounded-md bg-white`}>
              <button className="flex items-center gap-2" onClick={() => logout()}><CiLogout /> Logout</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar
