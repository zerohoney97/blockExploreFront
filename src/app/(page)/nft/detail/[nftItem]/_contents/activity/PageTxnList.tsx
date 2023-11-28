import React from "react";
import Link from "next/link";
import {
  faEye,
  faCopy,
  faCircleRight,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { INftAListOA } from "../../interface";

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
  const AddressClick = (value: string) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        console.log(value);
      })
      .catch((err) => {
        console.error(err);
      });
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
              <Link className='text-blue-400' href={"./1"}>
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
              <Link className='text-blue-400 mr-[10px]' href={"./1"}>
                {truncate2(item.from)}
              </Link>
              <button onClick={() => AddressClick(item.from)}>
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
          </td>
          <td>
            <div className={`${minWidth(50)} mr-[10px]`}>
              <FontAwesomeIcon icon={faCircleRight} />
            </div>
          </td>
          <td>
            <div className={`${minWidth(220)}`}>
              <Link className='text-blue-400 mr-[10px]' href={"./1"}>
                {truncate2(item.to)}
              </Link>
              <button onClick={() => AddressClick(item.to)}>
                <FontAwesomeIcon icon={faCopy} />
              </button>
            </div>
          </td>
        </tr>
      ))}
    </>
  );
};

export default NftPageTxnList;
