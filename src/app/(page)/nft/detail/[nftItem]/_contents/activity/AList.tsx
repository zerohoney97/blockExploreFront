import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

import { INftAListOA } from "../../interface";
import PageTxnList from "./PageTxnList";

const NftAList: React.FC<INftAListOA> = ({ pageTxList }) => {
  return (
    <div className='overflow-x-scroll'>
      <table className='w-full'>
        <thead className='border-gray border-b-[1px]'>
          <tr className='h-[50px] text-left text-sm'>
            <th className='text-center'>
              <button>
                <FontAwesomeIcon
                  className='border-transparent p-[10px] border-[1px]'
                  icon={faCircleQuestion}
                />
              </button>
            </th>
            <th>Txn Hash</th>
            <th>Age</th>
            <th>Action</th>
            <th>Price</th>
            <th>From</th>
            <th></th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          <PageTxnList pageTxList={pageTxList} />
        </tbody>
      </table>
    </div>
  );
};

export default NftAList;
