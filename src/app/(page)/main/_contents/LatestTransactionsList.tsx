import React from 'react'
import LatestTransactionsItem from './LatestTransactionsItem'
import { ITransactionsListProps } from '../interface'


const MainLatestTransactionsList:React.FC<ITransactionsListProps> = ({transactionslist}) => {
  return (
    <ul className='h-[482px] overflow-scroll w-full'>
      {transactionslist.map((item, index)=>(
        <>
          <LatestTransactionsItem transactionsData ={item} />
        </>
      ))}
    </ul>
  )
}

export default MainLatestTransactionsList