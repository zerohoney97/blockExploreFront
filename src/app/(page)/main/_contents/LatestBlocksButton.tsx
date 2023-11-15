"use client"
import React from 'react'
import { useRouter } from 'next/navigation';
import { ILatestBlocksButtonProps } from '../interface';

const MainLatestBlocksButton:React.FC<ILatestBlocksButtonProps> = ({buttonName}) => {
    const router = useRouter();
    const routeHandler = () => {
        router.push(`/main/blocks/`);
    }
  return (
    <>
      <button className='bg-stone-100 text-stone-500 w-full h-[50px] font-bold text-xs' onClick={routeHandler}>VIEW ALL {buttonName} →</button>
    </>
  )
}

export default MainLatestBlocksButton