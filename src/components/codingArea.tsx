import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import Testcases from './testcases';
import Result from './Result';

interface CodingAreaProps {
  id: string;
}

interface Status {
  id: number;
  description: string;
}

const CodingArea: React.FC<CodingAreaProps> = ({ id }) => {
  const [language, setLanguage] = useState('java');
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Status[]>([]);
  

  const setSubmit = async() => {
    setLoading(true);
    const res = await axios.post(`http://localhost:3050/submit/${id}`,{language:language,code:code},
      {
        headers: {
          'user': localStorage.getItem("authToken"),
      },
      }
    )
    console.log(res.data);
    setResult(res.data);
    setLoading(false);
  };

  const handleChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  useEffect(() => {
    async function fetchAPI() {
      try {
        const res = await axios.get(`http://localhost:3050/code/${id}/${language}`);
        setCode(res.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchAPI();
  }, [id, language]);

  return (
    <div className="w-1/2 h-svh">
      <div className="h-10 mt-1 flex justify-between items-center pr-3">
        <select name="language" value={language} id="language" className="h-8 w-20 rounded-md bg-gray-100 shadow-lg" onChange={(e) => setLanguage(e.target.value)}>
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>
        
        <div className="flex items-center gap-5">
          <button className="bg-gray-600 h-8 text-white px-5 rounded-md" onClick={() => setLoading(true)}>Run</button>
          <button className="bg-green-600 h-8 text-white px-5 rounded-md" onClick={setSubmit}>
            Submit
          </button>
        </div>
      </div>

      <Editor
        height="70%"
        width="100%"
        defaultLanguage="java"
        language={language}
        theme="vs-dark"
        value={code}
        onChange={handleChange}
      />

      {result.length > 0 ?<Testcases  loading={loading} result={result}/>:
      <Result />}
    </div>
  );
};

export default CodingArea;
