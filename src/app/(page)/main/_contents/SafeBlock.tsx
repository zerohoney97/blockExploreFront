import React from "react";

interface IMainSafeBlockProps {
  lastSafeBlock: number;
}

const MainSafeBlock: React.FC<IMainSafeBlockProps> = ({ lastSafeBlock }) => {
  return (
    <div className='w-1/4 whitespace-nowrap text-xs'>
      <p className='text-zinc-400'>LAST SAFE BLOCK</p>
      <p>{lastSafeBlock}</p>
    </div>
  );
};

export default MainSafeBlock;
