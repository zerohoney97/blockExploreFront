import React from 'react';

const TableHeader = () => {
  return (
    <thead className='align-middle text-nowrap border-b border-gray text-justify'>
      <tr className='text-sm border-box'>
        <th className='py-2 min-w-[60px] flex px-4'>#</th>
        <th className=' min-w-[350px]'>Token</th>
        <th className='text-text-mainTextColor min-w-[300px] '>Price</th>
        <th className='text-text-mainTextColor min-w-[230px]'>Change</th>
        <th className='text-text-mainTextColor min-w-[230px]'>Volume(24h)</th>
        <th className='text-text-mainTextColor min-w-[200px]'>Holders</th>
      </tr>
    </thead>
  );
}

export default TableHeader;