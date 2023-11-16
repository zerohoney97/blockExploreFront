import React from 'react'
import MainBlockIndicator from './BlockIndicator'
import MainFinalizedBlock from './FinalizedBlock'
import MainSafeBlock from './SafeBlock'
import { IOverviewLastFinalizedBlockDataProps } from '../interface'

const MainOverviewLastFinalizedBlock:React.FC<IOverviewLastFinalizedBlockDataProps> = ({overviewLastFinalizedBlockData}) => {
  const {lastFinalizedBlock, lastSafeBlock} = overviewLastFinalizedBlockData;
  return (
    <div className='flex w-11/12 m-auto sm:py-[20px] md:p-5 lg:p-5'>
      <MainBlockIndicator />
      <MainFinalizedBlock lastFinalizedBlock={lastFinalizedBlock} />
      <MainSafeBlock lastSafeBlock = {lastSafeBlock} />
    </div>
  )
}

export default MainOverviewLastFinalizedBlock