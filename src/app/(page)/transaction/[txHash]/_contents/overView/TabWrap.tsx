import React from 'react'

const TabWrap = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex w-full items-center sm:justify-center '>{children}</div>
  )
}

export default TabWrap