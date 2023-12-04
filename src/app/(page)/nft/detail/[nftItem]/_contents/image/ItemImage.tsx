import React from "react";
import NFTImg from 'public/NFTImg.jpg'
import Image from "next/image";
interface NftItemImageProps{
  nftData : string
}

const NftItemImage:React.FC<NftItemImageProps> = ({nftData}) => {
  return (
    <div className='border-gray border-[1px] rounded-xl w-full flex my-[20px] bg-white dark:bg-black/90'>
      <Image
        className='w-11/12 h-5/6 rounded-xl m-auto my-[50px]'
        src={NFTImg}
        alt=''
      />
    </div>
  );
};

export default NftItemImage;
