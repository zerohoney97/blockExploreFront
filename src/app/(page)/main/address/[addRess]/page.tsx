"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const Page = () => {
  const param = useParams();
  console.log(param);
  return (
    <div>Address : {param.addRess}</div>
  )
}

export default Page
