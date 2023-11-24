"use client"
import React, { useState, ChangeEvent } from 'react';

const AbiWrap = () => {
    const [ca, setCa] = useState<string>('');
    const [abiJson, setAbiJson] = useState<string>('');
  
    const handleCaChange = (e: ChangeEvent<HTMLInputElement>) => {
      setCa(e.target.value);
    };
  
    const handleAbiJsonChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
      setAbiJson(e.target.value);
    };
  
  return (
    <div className='dark:bg-datkMode-wrapBG py-1 px-2 m-auto bg-white rounded-lg mb-4 shadow-md min-w-[280px] max-w-[1250px] w-11/12'>
      <div className="mb-4">
        <label className="block mb-2">
          Contract Address:
          <input
            type="text"
            value={ca}
            onChange={handleCaChange}
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block mb-2">
          ABI JSON:
          <textarea
            value={abiJson}
            onChange={handleAbiJsonChange}
            className="block w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring focus:border-blue-400"
          />
        </label>
      </div>
      <div className='break-words'>
        <h2 className="text-xl font-semibold mb-2">Preview</h2>
        <p>Contract Address: {ca}</p>
        <p>ABI JSON: {abiJson}</p>
      </div>
    </div>
  )
}

export default AbiWrap