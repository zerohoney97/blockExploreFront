import React from 'react'
import { ethValueProps } from './interface'

const MainEthValue:React.FC<ethValueProps> = ({ethValue}) => {
  return (
    <>
        <span className='border-stone-300 border-[1px] px-2 py-[5px] rounded-md m-2 text-[10px]'>{ethValue} Eth</span>
    </>
  )
}

export default MainEthValue