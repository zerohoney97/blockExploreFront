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
    // 버튼만
    
    // 무엇을 써서 만든게 중요한게 아니라,
    // url을 어떻게 완성시켰는가
    // 어떠한 로직으로 만들었냐 

    /* 
    상위 컴포넌트에서 현재 컴포넌트로 "BLOCKS" 이라는 값을 받고, 그 값을 
    */
    <>
      <button className='bg-stone-100 text-stone-500 w-full h-[50px] font-bold text-xs' onClick={routeHandler}>VIEW ALL {button} →</button>
    </>
  )
}

export default MainLatestWrapButton