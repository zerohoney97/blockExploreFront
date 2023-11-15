import React from 'react'

interface IOverviewLastFinalizedBlockData{
  lastFinalizedBlock : number,
  lastSafeBlock : number
}

interface IOverviewLastFinalizedBlockDataProps{
  overviewLastFinalizedBlockData : IOverviewLastFinalizedBlockData
}

const MainOverviewLastFinalizedBlock:React.FC<IOverviewLastFinalizedBlockDataProps> = ({overviewLastFinalizedBlockData}) => {
  const {lastFinalizedBlock, lastSafeBlock} = overviewLastFinalizedBlockData;
  return (
    <div className='flex p-5 w-11/12 m-auto'>

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

export default MainOverviewLastFinalizedBlock