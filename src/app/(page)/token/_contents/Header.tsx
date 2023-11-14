import React from 'react';

const TableHeader = () => {
  return (
    <thead className='align-middle text-nowrap border-b border-gray text-justify'>
      <tr className='text-sm border-box'>
        <th className='py-2'>#</th>
        <th>Token</th>
        <th className='text-blue-400'>Price</th>
        <th className='text-blue-400'>Change</th>
        <th className='text-blue-400'>Volume(24h)</th>
        <th className='text-blue-400'>Holders</th>
      </tr>
    </thead>
  );
}

export default TableHeader;