import React, { useState, useEffect } from 'react';
import Editor from '@monaco-editor/react';
import axios from 'axios';
import Testcases from './testcases';
import Result from './Result';
import RunResults from './runResults';
import { Status, CodingAreaProps } from '../types';

const CodingArea: React.FC<CodingAreaProps> = ({ id, code, setCode }) => {
  const [language, setLanguage] = useState('java');
  const [loading, setLoading] = useState(false);
  const [currentResult, setCurrentResult] = useState<{
    type: 'submit' | 'run' | 'error' | null;
    data: Status[] | string | null;
  }>({ type: null, data: null });

  const fetchCode = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/code/${id}/${language}`);
      setCode(res.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleRequest = async (type: 'submit' | 'run') => {
    setLoading(true);
    setCurrentResult({type: type,data: [] })
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/${type}/${id}`,
        { language, code },
        {
          headers: {
            user: localStorage.getItem('authToken'),
          },
        }
      );
      console.log(res.data)
      setCurrentResult({ type, data: res.data });
      
    }catch (e: unknown) {
      let errorMessage = 'An error occurred';
    
      if (e && typeof e === 'object' && 'response' in e) {
        errorMessage = (e as { response?: { data?: string } }).response?.data || errorMessage;
      }
    
      setCurrentResult({ type: 'error', data: errorMessage });
    }
    setLoading(false);
  };

  const handleChange = (value: string | undefined) => {
    if (value !== undefined) {
      setCode(value);
    }
  };

  const renderResults = () => {
    switch (currentResult.type) {
      case 'submit':
        return <Testcases loading={loading} results={currentResult.data as Status[]} />;
      case 'run':
        return <RunResults loading={loading} results={currentResult.data as Status[]} />;
      case 'error':
        return <Result Error={currentResult.data as string} />;
      default:
        return null;
    }
  };

  useEffect(() => {
    fetchCode();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, language]);

  return (
    <div className="w-1/2 h-svh">
      <div className="h-10 mt-1 flex justify-between items-center pr-3">
        <select
          name="language"
          value={language}
          id="language"
          className="h-8 w-20 rounded-md text-black bg-gray-100 shadow-lg"
          onChange={(e) => setLanguage(e.target.value)}
        >
          <option value="java">Java</option>
          <option value="cpp">C++</option>
        </select>

        <div className="flex items-center gap-5">
          <button
            className="bg-gray-600 h-8 text-white px-5 rounded-md"
            onClick={() => handleRequest('run')}
            disabled={loading}
          >
            Run
          </button>
          <button
            className="bg-green-600 h-8 text-white px-5 rounded-md"
            onClick={() => handleRequest('submit')}
            disabled={loading}
          >
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

      {renderResults()}
    </div>
  );
};

export default CodingArea;
