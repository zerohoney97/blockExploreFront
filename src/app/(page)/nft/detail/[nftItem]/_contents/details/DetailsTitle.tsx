import React, {useState} from "react";
import { INftDetailsTitleProps } from "../../interface";


const NftDetailsTitle:React.FC<INftDetailsTitleProps> = ({stateProps, stateSetProps}) => {
  const titleClick = () => {
    stateSetProps(!stateProps);
  }
  return (
    <h2
      onClick={titleClick}
      className='border-gray border-b-[1px] h-[45px] leading-[45px] px-5 font-bold flex justify-between'>
      📑 Details
      <span className=''>{stateProps ? "∧" : "∨"}</span>
    </h2>
  );
};

export default NftDetailsTitle;
