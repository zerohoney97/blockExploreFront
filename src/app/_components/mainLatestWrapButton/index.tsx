"use client"
import React from 'react'
import { latestWrapButtonProps } from './interface'
import { useRouter } from 'next/navigation'

const MainLatestWrapButton:React.FC<latestWrapButtonProps> = ({buttonName}) => {
  const router = useRouter();
  const routeHandler = () => {
    console.log(buttonName);

    {buttonName == "BLOCKS" 
    ? 
    router.push("/main/blocks")
    : 
    router.push("/main/transactions")
    }
  }

  return (
    /* 
    버튼만
    무엇을 써서 만든게 중요한게 아니라,
    url을 어떻게 완성시켰는가
    어떠한 로직으로 만들었냐 

    상위 컴포넌트에서 현재 컴포넌트로 "BLOCKS" 이라는 값을 받고, 
    버튼을 눌렀을 때 BLOCKS 을 소문자로 변경한 후, 
    그 값을 이동하려는 경로에 넣고 해당 경로로 이동합니다.




    
    버튼이름과 url이 다를경우에 어떻게 할거냐.
    
    */
    <>
      <button className='bg-stone-100 text-stone-500 w-full h-[50px] font-bold text-xs' onClick={routeHandler}>VIEW ALL {buttonName} →</button>
    </>
  )
}

export default MainLatestWrapButton