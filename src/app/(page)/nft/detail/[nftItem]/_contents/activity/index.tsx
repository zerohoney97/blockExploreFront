import React from 'react'
import ActivityTitle from './ActivityTitle'
import ActivityContents from './ActivityContents'

const NftActivity = () => {
  return (
    <div className='border-gray border-[1px] rounded-xl'>
      <ActivityTitle />
      <ActivityContents />
    </div>
  )
}

export default NftActivity