import React from 'react'

export const BlockHeader = () => {
  return (
    
    <thead className='align-middle text-nowrap border-b border-gray text-justify'>
    <tr className='text-sm'>
      <th className='py-2 min-w-[100px]'>Block</th>
      <th className='min-w-[60px]'>Age</th>
      <th className='min-w-[200px]'>Txn</th>
      <th className='min-w-[200px]'>Fee Recipient</th>
      <th className='min-w-[200px]'>Gas Used</th>
      <th className='min-w-[200px]'>Gas Limit</th>
      <th className='min-w-[200px]'>Base Fee</th>
      <th className='min-w-[200px]'>Reward</th>
      <th className='min-w-[200px]'>Burnt Fees (ETH)</th>
    </tr>
  </thead>
  )
}
