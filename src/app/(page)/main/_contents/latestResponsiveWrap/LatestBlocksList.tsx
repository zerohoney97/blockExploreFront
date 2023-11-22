import React from 'react'
import LatestBlocksItem from './LatestBlocksItem'
import { IBlocksListProps } from '../../interface'


const MainLatestBlocksList:React.FC<IBlocksListProps> = ({blocksList}) => {
  return (
    <ul className='h-[482px] overflow-y-scroll w-full'>
      {blocksList.map((item, index)=>(
        <>
          <LatestBlocksItem blocksItem ={item} />
        </>
      ))}
    </ul>
  )
}

export default MainLatestBlocksList