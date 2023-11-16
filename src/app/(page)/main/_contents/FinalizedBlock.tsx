import React from "react";
import { IMainFinalizedBlockProps } from "../interface";

const MainFinalizedBlock:React.FC<IMainFinalizedBlockProps> = ({lastFinalizedBlock}) => {
  return (
    <div className='w-1/2 whitespace-nowrap text-xs'>
      <p className='text-zinc-400'>LAST FINALIZED BLOCK</p>
      <p>{lastFinalizedBlock}</p>
    </div>
  );
};

export default MainFinalizedBlock;
