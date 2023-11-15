import React from 'react';

const TableHeader = () => {
  return (
    <thead className='align-middle text-nowrap border-b border-gray text-justify'>
      <tr className='text-sm border-box'>
        <th className='py-2 min-w-[100px] flex justify-center'>#</th>
        <th className=' min-w-[250px]'>Token</th>
        <th className='text-blue-400 min-w-[300px] '>Price</th>
        <th className='text-blue-400 min-w-[200px]'>Change</th>
        <th className='text-blue-400 min-w-[200px]'>Volume(24h)</th>
        <th className='text-blue-400 min-w-[200px]'>Holders</th>
      </tr>
    </thead>
  );
}

export default TableHeader;