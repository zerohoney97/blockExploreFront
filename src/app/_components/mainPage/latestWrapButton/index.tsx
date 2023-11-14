import React from 'react'

interface Props {
  button : string
}

const LatestWrapButton:React.FC<Props> = ({button}) => {
  return (
    <button className='bg-stone-100 text-stone-500 w-full h-[50px] font-bold text-xs'>VIEW ALL {button} →</button>
  )
}

export default LatestWrapButton