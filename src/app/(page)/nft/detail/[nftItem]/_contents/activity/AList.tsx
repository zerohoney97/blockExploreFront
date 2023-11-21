import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleQuestion,
  faCircleRight,
  faCopy,
  faEye,
} from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

import { INftAListOA } from "../../interface";


const NftAList:React.FC<INftAListOA> = ({pageTxList}) => {
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

  return (
    <div className='overflow-x-scroll py-5 lg:flex lg:justify-center'>
      <table>
        <thead className='border-gray border-b-[1px]'>
          <tr className='text-left'>
            <th>
              <div className='mb-5'>
                <button>
                  <FontAwesomeIcon
                    className='p-[10px]'
                    icon={faCircleQuestion}
                  />
                </button>
              </div>
            </th>
            <th>
              <div className='mb-5'>Txn Hash</div>
            </th>
            <th>
              <div className='mb-5'>Age</div>
            </th>
            <th>
              <div className='mb-5'>Action</div>
            </th>
            <th>
              <div className='mb-5'>Price</div>
            </th>
            <th>
              <div className='mb-5'>From</div>
            </th>
            <th></th>
            <th>
              <div className='mb-5'>To</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {pageTxList.map((item, index) => (
            <tr
              key={index}
              className='border-gray border-b-[1px] last:border-b-[0px] text-sm '>
              <td>
                <div className='w-[60px] my-5 flex'>
                  <button onClick={() => additionalClick(index)}>
                    <FontAwesomeIcon
                      className='border-gray rounded-lg p-[10px] border-[1px]'
                      icon={faEye}
                    />
                  </button>
                  {/* <div className={`ml-[50px] w-[100px] h-[50px] bg-yellow absolute ${test[index] ? "block" : "hidden"}`}></div> */}
                </div>
              </td>
              <td>
                <div className='w-[192px] overflow-hidden'>
                  <Link className='text-blue-400' href={"./1"}>
                    {truncate(item.txnHash)}
                  </Link>
                </div>
              </td>
              <td>
                <div className='w-[155px] overflow-hidden'>{item.age}</div>
              </td>
              <td>
                <div className='w-[86px] overflow-hidden text-stone-500'>
                  {item.action}
                </div>
              </td>
              <td>
                <div className='w-[255px] overflow-hidden'>{item.price}</div>
              </td>
              <td>
                <div className='whitespace-nowrap mr-[10px] overflow-hidden'>
                  <Link className='text-blue-400 mr-[10px]' href={"./1"}>
                    {truncate2(item.from)}
                  </Link>
                  <button onClick={() => AddressClick(item.from)}>
                    <FontAwesomeIcon icon={faCopy} />
                  </button>
                </div>
              </td>
              <td>
                <div className='mr-[10px]'>
                  <FontAwesomeIcon icon={faCircleRight} />
                </div>
              </td>
              <td>
                <div className='whitespace-nowrap  overflow-hidden'>
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
        </tbody>
      </table>
    </div>
  );
};

export default NftAList;
