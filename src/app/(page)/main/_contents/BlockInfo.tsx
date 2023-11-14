import React from 'react'
import { IBlockInfoProps } from '../interface'
// import { useRouter } from 'next/navigation';


import Link from 'next/link';

const BlockInfo:React.FC<IBlockInfoProps>
= ({blockHeight, blockTime}) => {
  // const router = useRouter();
  // const routeHandler = () => {
  //   router.push(`/block/${blockHeight}`);
  // }

  return (
    <p>
        Block
        <Link className='ml-2 text-blue-400' href={`/main/block/${blockHeight}`}>{blockHeight}</Link>

        {/* <button onClick={routeHandler} className='ml-2 text-blue-400'>{blockHeight}</button> */}

        {/* ml-2 8px */}
        <span className='ml-2 text-xs text-zinc-400'>{blockTime} secs ago</span>
    </p>
  )
}

export default BlockInfo