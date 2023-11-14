import React from 'react'
import OverviewTransactions from './OverviewTransactions'
import OverviewLastFinalizedBlock from './OverviewLastFinalizedBlock'

interface IOverviewTransactionsData{
  totalTransactionsCounter : number,
  transactionsPerSecond : number,
  baseFee : number,
  priorityFee : number,
}

interface IOverviewProps{
  overviewTransactionsData : IOverviewTransactionsData,
  overviewLastFinalizedBlockData : IOverviewLastFinalizedBlockData
}

interface IOverviewLastFinalizedBlockData{
  lastFinalizedBlock : number,
  lastSafeBlock : number
}

const EthereumOverview:React.FC<IOverviewProps> = ({overviewTransactionsData, overviewLastFinalizedBlockData}) => {
  return (
    <div className='border-stone-300 border-[1px] w-11/12 bg-white m-auto rounded-xl overflow-hidden mt-[30px] mb-[30px]'>
      <OverviewTransactions overviewTransactionsData={overviewTransactionsData} />
      <OverviewLastFinalizedBlock overviewLastFinalizedBlockData ={overviewLastFinalizedBlockData} />
    </div>
  )
}

export default EthereumOverview