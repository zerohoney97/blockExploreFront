import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion, faCircleRight, faCopy, faEye } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

interface INftAListProps {
  txnHash: string;
  age: string;
  action: string;
  price: string;
  from: string;
  to: string;
}

interface INftAList {
  acitivityList: INftAListProps[];
}

const NftAList: React.FC<INftAList> = ({ acitivityList }) => {
  // 리스트
  const truncate = (hash: string) => {
    return hash.substring(0, 19) + "...";
  };
  const truncate2 = (hash:string)=>{
    return hash.substring(0,8) + "..." + hash.slice(-8);
  }
  const [test, setTest ] = useState(()=> acitivityList.reduce((acc, _,index)=>{
    acc[index] = false;
    return acc;
  }, {}));
  const additionalClick = (index:number) => {
    // console.log(index);
    setTest(prev => ({
      ...prev,
      [index] : !prev[index]
    }));
  };
  const AddressClick = (value: string) => {
    navigator.clipboard.writeText(value).then(()=>{
      console.log(value);
    }).catch(err =>{
      console.error(err);
    })
  }
  
  // 페이지네이션
  const [nowPage, setNowPage] = useState(1);
  const [pfirstIndex, setpfirstIndex] = useState(0);

  // 리스트에 보일 갯수
  const listItemsCount = 5;

  // 총 페이지 수
  const pageCount = Math.ceil(acitivityList.length / listItemsCount);
  

  const leftBtn = (nowPage:number) => {
    if(1 != nowPage){
      // // console.log(nowPage+1);
      // console.log(pfirstIndex);
      setpfirstIndex(pfirstIndex-listItemsCount);
      setNowPage(nowPage-1);
    }
  }

  const rightBtn = (nowPage:number) => {
    if(pageCount != nowPage){
      setpfirstIndex(pfirstIndex+listItemsCount);
      setNowPage(nowPage+1);
    }
  }

  const firstBtn = (nowPage:number) => {
    if(nowPage != 1){
      setpfirstIndex(0);
      setNowPage(1);
    }
  }
  
  const lastBtn = (nowPage:number) => {
    if(nowPage != pageCount){
      let lastIndex = 0;
      for(let i=0; i<pageCount-1; i++){
        lastIndex += listItemsCount;
      }
      setpfirstIndex(lastIndex);
      setNowPage(pageCount);
    }
  }
  return (
    <>
      <div className="md:flex lg:flex">
        {/* totalcount */}
        <div className="whitespace-nowrap py-5">
          <span className='text-stone-500 '>A total of {acitivityList.length} records found</span>
        </div>
        {/* pagination */}
        <div className="whitespace-nowrap py-5 md:ml-auto lg:ml-auto">
          <button onClick={()=>firstBtn(nowPage)} className='bg-gray border-gray border-[1px] p-1 rounded-md mr-[3px]'>First</button>
          <button onClick={()=>leftBtn(nowPage)} className='bg-gray border-gray border-[1px] p-1 rounded-md mr-[3px]'><FontAwesomeIcon icon={faAngleLeft} /></button>
          <span className='bg-gray border-gray border-[1px] p-[6px] rounded-md mr-[3px]'>Page {nowPage} of {pageCount}</span>
          <button onClick={()=>rightBtn(nowPage)} className='bg-gray border-gray border-[1px] p-1 rounded-md mr-[3px]'><FontAwesomeIcon icon={faAngleRight} /></button>
          <button onClick={()=>lastBtn(nowPage)} className='bg-gray border-gray border-[1px] p-1 rounded-md mr-[3px]'>Last</button>
        </div>
      </div>
      {/* list */}
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
            {acitivityList.map(
              (item, index) =>
                index >= pfirstIndex &&
                index < pfirstIndex + listItemsCount && (
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
                        <div
                          className={`ml-[50px] w-[100px] h-[50px] bg-yellow absolute ${
                            test[index] ? "block" : "hidden"
                          }`}></div>
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
                      <div className='w-[255px] overflow-hidden'>
                        {item.price}
                      </div>
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
                ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default NftAList;
