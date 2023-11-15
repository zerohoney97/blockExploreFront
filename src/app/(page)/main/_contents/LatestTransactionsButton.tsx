"use client"
import React from 'react'
import { useRouter } from 'next/navigation'
import { ILatestTransactionsButtonProps } from '../interface'

const MainLatestTransactionsButton:React.FC<ILatestTransactionsButtonProps> = ({buttonName}) => {
    const router = useRouter();
    const routeHandler = () => {
        router.push(`/main/transactions`);
    }
  return (
    <button className='bg-stone-100 text-stone-500 w-full h-[50px] font-bold text-xs' onClick={routeHandler}>VIEW ALL {buttonName} →</button>
  )
}

export default MainLatestTransactionsButton