import React from "react";
import { INftALTotalRecordProps } from "../../interface";

const NftALTotalRecord: React.FC<INftALTotalRecordProps> = ({ totalCount }) => {
  return (
    <>
      <div className='md:flex lg:flex'>
        <div className='whitespace-nowrap py-5'>
          <span className='text-stone-500 '>
            A total of {totalCount} records found
          </span>
        </div>
      </div>
    </>
  );
};

export default NftALTotalRecord;
