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
    <div className='w-11/12 m-auto'>
      <NftItemTitle />
      <NftItemImage />
      <NftItemPrice />
      <NftItemDetailsWrap />
      <NftItemActivity />
    </div>
  )
}

export default Page