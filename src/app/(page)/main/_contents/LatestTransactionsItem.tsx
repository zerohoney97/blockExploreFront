import React from 'react'
import TransactionHashInfo from './TransactionHashInfo'
import TransactionFrom from './TransactionFrom'
import TransactionTo from './TransactionTo'
import { ITransactionsItemProps } from '../interface'
import MainEthValue from '@app/_components/mainEthValue'

const LatestTransactionsItem:React.FC<ITransactionsItemProps> = ({transactionsItem}) => {
  const {transactionHash, transactionTime, fromAddress, toAddress, ethAmount} = transactionsItem;
  return (
    <li className='bg-white text-sm w-11/12 m-auto border-gray border-b-[1px] last:border-b-0 py-[15px]'>
      <TransactionHashInfo transactionHash = {transactionHash} transactionTime= {transactionTime} />
      <TransactionFrom fromAddress={fromAddress} />
      <TransactionTo toAddress ={toAddress} />
      <MainEthValue ethValue ={ethAmount} />
    </li>
  )
}

export default LatestTransactionsItem