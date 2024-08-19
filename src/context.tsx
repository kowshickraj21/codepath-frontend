import { createContext, useState,useEffect } from 'react';

interface DarkThemeContextType {
    darkTheme: boolean;
    setDarkTheme: (value: boolean) => void;
}

interface contextProps {
    children : JSX.Element
}
export interface User{
    name: string,
    email: string,
    picture: string,
    Problems: Int32List
}

interface UserContextType {
  User: User;
  setUser: (value:User) => void;
}

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