import React from 'react'
import { IMinerProps } from '../../interface'
import Link from 'next/link'

const MainMiner:React.FC<IMinerProps> = ({feeRecipient}) => {
  return (
    <p>
        Fee Recipient
        <Link href={`/main/address/${feeRecipient}`} className='ml-2 text-blue-400'>{feeRecipient}</Link>
    </p>
  )
}

export default MainMiner