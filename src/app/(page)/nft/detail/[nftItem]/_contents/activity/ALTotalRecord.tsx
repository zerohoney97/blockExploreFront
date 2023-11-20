import React from 'react'

interface INftALTotalRecordProps {
  totalCount : number
}

const NftALTotalRecord:React.FC<INftALTotalRecordProps> = ({totalCount}) => {
  return (
    <>
      <span className='text-stone-500'>A total of {totalCount} records found</span>
    </>
  )
}

export default NftALTotalRecord