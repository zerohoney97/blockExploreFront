import React from "react";

const NftDetailTableWrap = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" py-1 px-2 m-auto overflow-x-scroll bg-white rounded-lg mb-4 shadow-md min-h-[332px] sm:w-11/12 sm:max-w-[368px] md:max-w-[600px] lg:max-w-[368px]  lg:w-96    ">
      {/* <Title title="Token Tracker" />
  <div className="overflow-auto">
    <ContentList />
    {children}
    
  </div> */}
      {children}
    </div>
  );
};

export default NftDetailTableWrap;
