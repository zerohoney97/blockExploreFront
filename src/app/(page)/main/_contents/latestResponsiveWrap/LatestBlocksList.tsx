import React from 'react'
import LatestBlocksItem from './LatestBlocksItem'
import { IBlocksListProps } from '../../interface'


const MainLatestBlocksList:React.FC<IBlocksListProps> = ({blocksList}) => {
  return (
    <ul className='h-[482px] overflow-y-scroll w-full dark:bg-black '>
      {blocksList.map((item, index)=>(
        <React.Fragment key={index}>
          <LatestBlocksItem blocksItem ={item}/>
        </React.Fragment>
      ))}
    </ul>
  )
}

export default MainLatestBlocksList