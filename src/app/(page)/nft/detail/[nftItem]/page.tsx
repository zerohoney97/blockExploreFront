import React from "react";
import NftItemTitle from "./_contents/title/ItemTitle";
import NftItemImage from "./_contents/image/ItemImage";
import NftItemPrice from "./_contents/price/ItemPrice";
import NftActivity from "./_contents/activity";
import NftDetails from "./_contents/details";
import { getNfts } from "@app/_api/nftDetail/getNfts";
import { INftDetails } from "./interface";

interface INftItemProps {
  params: {
    [key: string]: string;
  };
}

const Page = async (props: INftItemProps) => {
  let param = props.params.nftItem;
  const nftData: INftDetails = await getNfts(param);
  
  const activityData = nftData.txs;
  console.log("txs:",activityData);
  return (
    <>
      <div className='sm:p-4 md:p-8 lg:px-8 lg:my-10 m-auto'>
        <div className='flex sm:flex-col md:gap-10 lg:gap-10 '>
          <div className='md:hidden lg:hidden'>
            <NftItemTitle nftData={nftData} />
          </div>
          <div>
            <NftItemImage nftData = {nftData.imageUrl} />
          </div>
          <div className='md:w-full'>
            <div className='sm:hidden'>
              <NftItemTitle nftData={nftData} />
            </div>
            {/* <NftItemPrice /> */}
            <NftDetails nftData={nftData} />
          </div>
        </div>
        <NftActivity activityData={activityData.length == 0 ? null : {activityData} }  />
        
      </div>
    </>
  );
};

export default Page;
