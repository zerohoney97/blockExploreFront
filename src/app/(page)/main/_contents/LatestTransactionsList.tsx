import React from 'react'
import LatestTransactionsItem from './LatestTransactionsItem'
import { ITransactionsListProps } from '../interface'


const LatestTransactionsList:React.FC<ITransactionsListProps> = ({transactionslist}) => {
  return (
    <ul className='h-[482px] overflow-scroll w-full'>
      {transactionslist.map((item, index)=>(
        <>
          <LatestTransactionsItem transactionsItem ={item} />
        </>
      ))}
    </ul>
  )
}

export default LatestTransactionsList