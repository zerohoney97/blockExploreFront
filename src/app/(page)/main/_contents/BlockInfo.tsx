import React from 'react'
import { IBlockInfoProps } from '../interface'

import Link from 'next/link';

const MainBlockInfo:React.FC<IBlockInfoProps>
= ({blockHeight, blockTime}) => {

  return (
    <p>
        Block
        <Link className='ml-2 text-blue-400' href={`/main/block/${blockHeight}`}>{blockHeight}</Link>

        <span className='ml-2 text-xs text-zinc-400'>{blockTime} secs ago</span>
    </p>
  )
}

export default MainBlockInfo