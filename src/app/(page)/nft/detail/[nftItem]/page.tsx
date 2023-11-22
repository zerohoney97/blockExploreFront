import React from 'react'
import NftItemTitle from './_contents/title/ItemTitle'
import NftItemImage from './_contents/image/ItemImage'
import NftItemPrice from './_contents/price/ItemPrice'
import NftActivity from './_contents/activity'
import NftDetails from './_contents/details'

const Page = () => {
  // const param = useParams();
  // const {nftItem} = param;
  // console.log(nftId + " / Token ID :" + nftItem);
  return (
    <div className='sm:w-11/12 md:w-10/12 lg:w-9/12 m-auto'>
      <div className='flex sm:flex-col md:gap-10 lg:gap-10'>
        <div className='md:hidden lg:hidden'>
          <NftItemTitle />
        </div>
        <div>
          <NftItemImage />
        </div>
        <div className='md:w-full'>
          <div className='sm:hidden'>
            <NftItemTitle />
          </div>
          <NftItemPrice />
          <NftDetails />
        </div>
      </div>
      <NftActivity />
    </div>
  )
}

export default Page