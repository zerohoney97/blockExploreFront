import React from 'react'

const TokenItemTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" py-1 px-2 m-auto  bg-white rounded-lg mb-4 shadow-md w-11/12   ">

      {children}
    </div>
  )
}

export default TokenItemTable