import React from 'react';

const TableHeader = () => {
  return (
    <thead className='align-middle text-nowrap border-b border-gray text-justify'>
      <tr className='text-sm border-box'>
        <th className='py-2 min-w-[50px]'>#</th>
        <th className=' min-w-[200px]'>Token</th>
        <th className='text-blue-400 min-w-[100px]'>Price</th>
        <th className='text-blue-400 min-w-[100px]'>Change</th>
        <th className='text-blue-400 min-w-[150px]'>Volume(24h)</th>
        <th className='text-blue-400 min-w-[100px]'>Holders</th>
      </tr>
    </thead>
  );
}

export default TableHeader;