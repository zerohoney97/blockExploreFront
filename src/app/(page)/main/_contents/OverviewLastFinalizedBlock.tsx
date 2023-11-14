import React from 'react'

interface IOverviewLastFinalizedBlockData{
  lastFinalizedBlock : number,
  lastSafeBlock : number
}

interface IOverviewLastFinalizedBlockDataProps{
  overviewLastFinalizedBlockData : IOverviewLastFinalizedBlockData
}

const OverviewLastFinalizedBlock:React.FC<IOverviewLastFinalizedBlockDataProps> = ({overviewLastFinalizedBlockData}) => {
  const {lastFinalizedBlock, lastSafeBlock} = overviewLastFinalizedBlockData;
  return (
    <div className='flex w-11/12 m-auto mt-[20px] mb-[20px] pt-[10px] pb-[10px] '>
      <div className='w-[40px]'>
        <span className='flex justify-center'>🤶</span>
      </div>
      <div className='w-1/2 whitespace-nowrap'>
        <p className='text-zinc-400 text-xs '>LAST FINALIZED BLOCK</p>
        <p>
          {lastFinalizedBlock}
        </p>
      </div>
      <div className='w-1/4 whitespace-nowrap'>
        <p className='text-zinc-400 text-xs '>LAST SAFE BLOCK</p>
        <p>
          {lastSafeBlock}
        </p>
      </div>
    </div>
  )
}

export default OverviewLastFinalizedBlock