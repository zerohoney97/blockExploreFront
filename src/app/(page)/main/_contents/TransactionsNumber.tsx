import React from 'react'
import { ITransactionsNumberProps } from '../interface'
import Link from 'next/link'

const TransactionsNumber:React.FC<ITransactionsNumberProps> = ({transactionsInThisBlock, transactionsTime, blockHeight}) => {
  return (
    <>
      <Link href={`/main/txs/${blockHeight}`} className='text-blue-400'>{transactionsInThisBlock} txns</Link>
        {/* <a className='text-blue-400' href=''>{transactionsInThisBlock} txns</a> */}
        <span className='ml-2 text-xs text-zinc-400'>in {transactionsTime} secs</span>
    </>
  )
}

export default TransactionsNumber