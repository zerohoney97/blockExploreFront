import React from 'react'

const CaItemTable = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" py-3 px-3 bg-white rounded-lg m-3 shadow-md h-[240px] overflow-auto dark:bg-black dark:text-white">

      {children}
    </div>
  )
}

export default CaItemTable