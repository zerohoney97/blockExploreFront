import Link from 'next/link'
import React from 'react'
import { NftDetailsItemProps } from '../../interface';


const NftDetailsItemLink:React.FC<NftDetailsItemProps> = ({name,address}) => {
  const truncate = (hash: string) => {
    return hash.substring(0, 18);
  };

  const truncateHash = truncate(address) + "...";

  return (
    <li className='flex py-5'>
      <span className='sm:w-[150px] text-stone-500 text-sm'>{name}:</span>
      <Link href='' className='text-blue-400 text-sm'>{truncateHash}</Link>
    </li>
  )
}

export default NftDetailsItemLink