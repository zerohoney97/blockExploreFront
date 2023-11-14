"use client"
import { useParams } from 'next/navigation'
import React from 'react'

const page = () => {
    const param = useParams();
    console.log(param.transactionHash);
  return (
    <div>
        <p>Transaction Details</p>
        Transaction Hash : {param.transactionHash}
    </div>
  )
}

export default page