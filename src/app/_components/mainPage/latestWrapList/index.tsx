import React from 'react'
import LatestBlocksItem from '@app/(page)/main/contents/LatestBlocksItem'

// interface Props {
//   list : any
// }

const LatestWrapList = () => {
  // const items = Object.keys(list).map((key)=>(
  //   <LatestBlocksItem key={key} data={list[key]} />
  // ));
  return (
    <ul className='h-[482px] overflow-scroll w-full'>
      <LatestBlocksItem />
      <LatestBlocksItem />
      <LatestBlocksItem />
      <LatestBlocksItem />
      <LatestBlocksItem />
      <LatestBlocksItem />
    </ul>
  )
}

export default LatestWrapList