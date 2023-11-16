import React from 'react'
import MainBlockIndicator from './BlockIndicator'
import MainFinalizedBlock from './FinalizedBlock'
import MainSafeBlock from './SafeBlock'
import { IOverviewLastFinalizedBlockDataProps } from '../interface'

const MainOverviewLastFinalizedBlock:React.FC<IOverviewLastFinalizedBlockDataProps> = ({overviewLastFinalizedBlockData}) => {
  const {lastFinalizedBlock, lastSafeBlock} = overviewLastFinalizedBlockData;
  return (
    <div className='flex sm:w-11/12 md:w-[330px] lg:w-[400px] m-auto sm:p-5 sm:pl-0'>
      <MainBlockIndicator />
      <MainFinalizedBlock lastFinalizedBlock={lastFinalizedBlock} />
      <MainSafeBlock lastSafeBlock = {lastSafeBlock} />
    </div>
  )
}

export default MainOverviewLastFinalizedBlock