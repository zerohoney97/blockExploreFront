"use client"
import { useParams } from 'next/navigation'
import React from 'react'
import NftItemTitle from './_contents/title/ItemTitle'
import NftItemImage from './_contents/image/ItemImage'
import NftItemPrice from './_contents/price/ItemPrice'
import NftItemDetailsWrap from './_contents/details/ItemDetailsWrap'
import NftItemActivity from './_contents/activity/ItemActivity'

const Page = () => {
  // const param = useParams();
  // const {nftItem} = param;
  // console.log(nftId + " / Token ID :" + nftItem);
  return (
    <div className='sm:w-11/12 md:w-10/12 lg:w-9/12 m-auto'>
      <div className='sm:flex sm:flex-col md:flex lg:flex'>
        <div className='sm:block sm:order-2 md:w-1/2 md:order-2 lg:w-2/3 lg:order-2'>
          <NftItemTitle />
          <NftItemPrice />
          <NftItemDetailsWrap />
        </div>
        <div className='sm:block sm:order-1 md:w-1/2 md:mr-5 lg:mr-5 md:order-1 lg:w-1/3 lg:order-1'>
          <NftItemImage />
        </div>
      </div>
      <NftItemActivity />
    </div>
  )
}

export default Page