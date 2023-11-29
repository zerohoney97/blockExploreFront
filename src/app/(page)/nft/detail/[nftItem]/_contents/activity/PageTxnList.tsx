import React from "react";
import Link from "next/link";
import {
  faEye,
  faCopy,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INftAListOA } from "../../interface";
import WordBallon from "@app/_components/wordBallon";
import Image from "next/image";
import Arrow from "public/arrow.png";

const NftPageTxnList: React.FC<INftAListOA> = ({ pageTxList, toggleHandler }) => {
  const truncate = (hash: string) => {
    return hash.substring(0, 19) + "...";
  };
  const truncate2 = (hash: string) => {
    return hash.substring(0, 8) + "..." + hash.slice(-8);
  };
  const additionalClick = (index: number) => {
    console.log(index);
  };
  const minWidth = (value:number) => {
    return `min-w-[${value}px]`;
  } 
  return (
    <>
      {pageTxList.map((item, index) => (
        <tr key={index} className='border-gray border-b-[1px] text-sm '>
          <td>
            <div className={`${minWidth(60)} h-[50px] flex justify-center`}>
              <button onClick={() => additionalClick(index)}>
                <FontAwesomeIcon
                  className='border-gray rounded-lg p-[10px] border-[1px] cursor-pointer'
                  icon={faEye}
                  onClick={toggleHandler}
                />
              </button>
              {/* <div className={`ml-[50px] w-[100px] h-[50px] bg-yellow absolute ${test[index] ? "block" : "hidden"}`}></div> */}
            </div>
          </td>
          <td>
            <div className={`${minWidth(220)}`}>
              <Link className='text-text-mainTextColor' href={"./1"}>
                {truncate(item.txnHash)}
              </Link>
            </div>
          </td>
          <td>
            <div className={`${minWidth(180)}`}>{item.age}</div>
          </td>
          <td>
            <div className={`${minWidth(100)} text-stone-500`}>
              {item.action}
            </div>
          </td>
          <td>
            <div className={`${minWidth(180)}`}>{item.price}</div>
          </td>
          <td>
            <div className={`${minWidth(220)} mr-[10px] `}>
              <Link className='text-text-mainTextColor mr-[10px]' href={"./1"}>
                {truncate2(item.from)}
              </Link>
              <WordBallon copyValue={item.from} />
            </div>
          </td>
          <td>
            <div className={`${minWidth(50)} mr-[10px]`}>
              <Image alt='' width={20} src={Arrow} />
            </div>
          </td>
          <td>
            <div className={`${minWidth(220)}`}>
              <Link className='text-text-mainTextColor mr-[10px]' href={"./1"}>
                {truncate2(item.to)}
              </Link>
              <WordBallon copyValue={item.to} />
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default NftPageTxnList;
