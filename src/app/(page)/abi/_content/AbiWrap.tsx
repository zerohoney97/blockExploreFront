"use client";
import React, { useState, ChangeEvent } from "react";
import AbiPreviewContent from "./AbiPreviewContent";
import AbiContent from "./AbiContent";
import AbiFlie from "./AbiFile";

const AbiWrap: React.FC = () => {
  const [ca, setCa] = useState<string>("");
  const [abiJson, setAbiJson] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const handleCaChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCa(e.target.value);
  };

  const handleAbiJsonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (typeof result === 'string') {
          setAbiJson(result);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="dark:bg-datkMode-wrapBG py-1 px-2 m-auto bg-white rounded-lg mb-4 shadow-md min-w-[280px] max-w-[1250px] w-11/12 mt-10 ">
      <div className="border-b-2 border-gray ">
        <AbiContent label="Contract Address" value={ca} onChange={handleCaChange} />
        <AbiFlie label="ABI JSON" onChange={handleAbiJsonChange} />
      </div>
      <div className="break-words mt-5">
        <h3 className="text-xl font-semibold m-4">Preview</h3>
        <AbiPreviewContent label="Contract Address" content={ca} />
        <AbiPreviewContent label="ABI JSON" content={abiJson} />
      </div>
      <button className="bg-green-500/50 hover:bg-green-500 text-white font-semibold p-2 rounded m-4  text-sm">
        등록하기
      </button>
    </div>
  );
};

export default AbiWrap;
