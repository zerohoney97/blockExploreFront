import React from 'react'
import { NftDetailsItemProps } from '../../interface'


const NftDetailsItem:React.FC<NftDetailsItemProps> = ({name,address}) => {
  return (
    <li className='flex py-5'>
      <span className='sm:w-[150px] text-stone-500 text-sm'>{name}:</span>
      <span className= 'text-sm'>{address}</span>
    </li>
  )
}

export default NftDetailsItem