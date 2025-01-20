import { IoMoon } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import codepathLight from "../assets/codepath_light.png"
import codepathDark from "../assets/codepath_dark.png"
import { useContext, useState } from "react";
import { DarkThemeContext, UserContext } from '../context'
import { delelteToken } from "../functions/Token";
import { useNavigate } from "react-router-dom";
import { IoIosSunny } from "react-icons/io";


const Navbar = () => {
  const navigate = useNavigate();
  const [menu,openMenu] = useState(false);
  const { darkTheme, setDarkTheme } = useContext(DarkThemeContext);
  const { User } = useContext(UserContext);

  const logout = () => {
    delelteToken("authToken");
    navigate('/login');
  }

  const handleThemeChange = () => {
    setDarkTheme(!darkTheme)
    localStorage.setItem("darkTheme",(!darkTheme)?"true":"false")
  }

  return (
    <div className={`flex justify-between items-center px-8 h-16 shadow-lg ${darkTheme?'bg-black':'bg-white'}`}>

        <a href="/" className="h-10">
        {darkTheme?
        <img src={codepathDark} alt="Logo" className="h-full w-full"/>:
        <img src={codepathLight} alt="Logo" className="h-full w-full"/>}
        </a>

        <form className="border-2 py-1 px-3 flex w-1/3 bg-transparent">
            <input type="text" className="focus:outline-none w-full pl-2 bg-transparent" placeholder="Search"/>
            <button className="pl-5 pr-2 border-l-2"><FaSearch /></button>
        </form>

        <div className="flex gap-7 items-center mr-2">
            {darkTheme?
            <IoIosSunny className="text-3xl" onClick={handleThemeChange} />:
            <IoMoon className="text-2xl" onClick={handleThemeChange} />
            }
            {User.picture?
            <div>
            <img src={User.picture} className="bg-black rounded-full h-10 w-10" onClick={() => openMenu(!menu)} referrerPolicy="no-referrer" />
            <div className={`${menu?'absolute':'hidden'} top-16 right-10 mt-1 p-5 py-3 rounded-md shadow-xl ${darkTheme?'dark':'light'}`}>
              <button className="flex items-center gap-2" onClick={() => logout()}><CiLogout /> Logout</button>
            </div>
            </div>
            : null }
        </div>
    </div>
  )
}

export default Navbar
