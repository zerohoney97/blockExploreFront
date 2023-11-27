import React, { useState } from "react";
import { faCheck, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";


interface IBallonWord {
  copyValue : string;
}

const WordBallon: React.FC<IBallonWord> = ({ copyValue }) => {
  const [copyIcon, setCopyIcon] = useState(false);
  const [iconHover, setIconHover] = useState(false);

  
  const AddressClick = (value: string) => {
    setCopyIcon(true);
    setTimeout(() => {
      setCopyIcon(false);
    }, 1000);
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log(value);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  
  const hoverOn = () =>{
    setIconHover(true);
  }
  const hoverOff = () =>{
    setIconHover(false);
  }
  return (
    <>
      <div className='group relative '>
        <button onMouseEnter={hoverOn} onMouseLeave={hoverOff} onClick={() => AddressClick(copyValue)} className='ml-3 hover:text-blue-500'> 
          {copyIcon ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faCopy} />
          )}
        </button>
        <div
          className={`opacity-0  absolute bottom-full bg-[#15293F] text-white p-2 whitespace-nowrap rounded-lg leading-none text-[10px]  ${
            copyIcon ? "left-[-7px]" : "left-[-20px]"
          } duration-500
          ${iconHover ? 'opacity-100' : 'opacity-0' }
          `}>
          {copyIcon ? "Copied!" : "Copy Address" }
        </div>
        <div className={`opacity-0  absolute h-[10px] bottom-[40px] border-t-[#15293F] border-t-[5px] border-x-transparent border-x-[5px] left-[15px] duration-500 ${iconHover ? 'opacity-100' : 'opacity-0' }
        `}></div>
      </div>
    </>
  );
};

export default WordBallon;
