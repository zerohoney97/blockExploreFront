import React from 'react'

export const BlockHeader = () => {
  return (
    
    <thead className='align-middle text-nowrap border-b border-gray text-justify'>
    <tr className='text-sm '>
      <th className='py-2 min-w-[100px] font-semibold'>Block</th>
      <th className='min-w-[60px] font-semibold'>Age</th>
      <th className='min-w-[200px] font-semibold '>Txn</th>
      <th className='min-w-[200px] font-semibold'>Fee Recipient</th>
      <th className='min-w-[200px] font-semibold'>Gas Used</th>
      <th className='min-w-[200px] font-semibold'>Gas Limit</th>
      <th className='min-w-[200px] font-semibold'>Base Fee</th>
      <th className='min-w-[200px] font-semibold'>Reward</th>
      <th className='min-w-[200px] font-semibold'>Burnt Fees (ETH)</th>
    </tr>
  </thead>
  )
}
