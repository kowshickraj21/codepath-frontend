import { createContext, useState,useEffect } from 'react';

interface DarkThemeContextType {
    darkTheme: boolean;
    setDarkTheme: (value: boolean) => void;
}

interface contextProps {
    children : JSX.Element
}

const DarkThemeContext = createContext<DarkThemeContextType>({
 darkTheme: false,
 setDarkTheme: () => {},
});


const ThemeProvider: React.FC<contextProps> = ({ children }) => {
 const [darkTheme, setDarkTheme] = useState<boolean>(false);

 useEffect(() => {
    document.body.className = darkTheme ? 'dark' : 'light';
  }, [darkTheme]);

 return (
   <DarkThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
     {children}
   </DarkThemeContext.Provider>
 );
};

export { DarkThemeContext, ThemeProvider };