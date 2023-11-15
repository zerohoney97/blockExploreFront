"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  const param = useParams();
  console.log(param);
  return (
    <div>blockHeight: {param.blockHeight}</div>
  )
}

export default Page