import { useState } from 'react';
import Editor from '@monaco-editor/react';

const CodingArea = () => {
    const [language,setLanguage] = useState("java")
    const [code, setCode] = useState('');

    const setSubmit = () => {
        console.log(code)
    }

    const handleChange = (value :string | undefined) => {
        if(value != undefined){
        setCode(value)
        }
    }

  return (
    <div className="w-1/2 h-full">
    <div className="h-9 mt-1 flex justify-between items-center pr-3 pl-1">
        <select name="language" id="language" className='h-8 w-20 shadow-xl' onChange={(e) => {setLanguage(e.target.value)}}>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
        </select>
        <div className='flex items-center gap-5'>
        <button className='bg-gray-600 h-8 text-white px-5 rounded-md'>Run</button>
        <button className='bg-green-600 h-8 text-white px-5 rounded-md' onClick={setSubmit}>Submit</button>
        </div>
    </div>
    <Editor height="70%" width="100%" language={language} theme="vs-dark" defaultValue="// welcome to Codepath" onChange={handleChange}  />
    </div>
  )
}

export default CodingArea
