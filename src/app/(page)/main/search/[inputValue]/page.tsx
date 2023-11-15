"use client"
import React from 'react'
import { useParams } from 'next/navigation'

const Page = () => {
  const param = useParams();
  // console.log(param.inputValue);
  return (
    <div>{param.inputValue} 입력됨</div>
  )
}

export default Page