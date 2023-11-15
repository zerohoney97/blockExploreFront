import React from 'react'

const TokenItemTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" py-1 px-2 bg-white rounded-lg m-4 shadow-md h-[240px] ">

      {children}
    </div>
  )
}

export default TokenItemTable