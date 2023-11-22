import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";

import { INftAListOA } from "../../interface";
import PageTxnList from "./PageTxnList";

const NftAList: React.FC<INftAListOA> = ({ pageTxList }) => {
  return (
    <div className='overflow-x-scroll p-5 lg:flex'>
      <table>
        <thead className='border-gray border-b-[1px]'>
          <tr className='text-left'>
            <th>
              <div className='mb-5'>
                <button>
                  <FontAwesomeIcon className='border-transparent p-[10px] border-[1px]' icon={faCircleQuestion} />
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
          <PageTxnList pageTxList={pageTxList} />
        </tbody>
      </table>
    </div>
  );
};

export default NftAList;
