export interface problems{
    pid: number,
    title: string,
    difficulty: string,
    tags: string[]
}

export interface Problem{
    title: string,
    description: string,
    pid: number,
    examples: Examples[],
}

export interface Submissions{
    Sid : string,
    Pid : number,
    Email : string,
    Language : string,
    Code : string,
}

export interface Examples{
    input : string,
    output : string,
} 

export interface DarkThemeContextType {
    darkTheme: boolean;
    setDarkTheme: (value: boolean) => void;
}

export interface contextProps {
    children : JSX.Element
}
export interface User{
    name: string,
    email: string,
    picture: string,
    Problems: Int32List
}

export interface UserContextType {
  User: User;
  setUser: (value:User) => void;
}

export interface CodingAreaProps {
    id: string;
    code: string,
    setCode : React.Dispatch<React.SetStateAction<string>>;
}
  
export interface Status {
    id: number;
    description: string;
}

export interface ProtectedRouteProps {
    element: React.ReactNode;
}

export interface Status {
    id: number;
    description: string;
}
  
export interface codingAreaProps {
    loading : boolean
    results : Status[] 
}

export interface ProblemPropsType{
    page : string
}

