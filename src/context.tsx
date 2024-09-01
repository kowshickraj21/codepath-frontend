import { createContext, useState,useEffect } from 'react';
import { DarkThemeContextType,UserContextType,contextProps,User } from './types'


const DarkThemeContext = createContext<DarkThemeContextType>({
 darkTheme: false,
 setDarkTheme: () => {},
});

const UserContext = createContext<UserContextType>({
  User: {
    name: "",
    email: "",
    picture: "",
    Problems: []
  },
  setUser: () => {},
 });


const ThemeProvider: React.FC<contextProps> = ({ children }) => {
 const [darkTheme, setDarkTheme] = useState<boolean>(false);
 const [User,setUser] = useState<User>({
  name: "",
  email: "",
  picture: "",
  Problems: []
 });

 useEffect(() => {
  setDarkTheme(localStorage.getItem("darkTheme") == "true")
    document.body.className = darkTheme ? 'dark' : 'light';
  }, [darkTheme]);
 return (
  <UserContext.Provider value={{User,setUser}} >
   <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
     {children}
   </DarkThemeContext.Provider>
   </UserContext.Provider>
 );
};

export { DarkThemeContext, ThemeProvider, UserContext };