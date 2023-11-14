"use client"
import React from 'react'
import { latestWrapButtonProps } from './interface'
import { useRouter } from 'next/navigation'

const MainLatestWrapButton:React.FC<latestWrapButtonProps> = ({button}) => {
  const router = useRouter();
  const routeHandler = () => {
    console.log(button);
    let lowerCase =button.toLowerCase();
    console.log(lowerCase);
    router.push(`/main/${lowerCase}`);
  }

  return (
    <>
      <button className='bg-stone-100 text-stone-500 w-full h-[50px] font-bold text-xs' onClick={routeHandler}>VIEW ALL {button} →</button>
    </>
  )
}

export default MainLatestWrapButton