import React from "react";
import Title from "../itemTitle";

const ItemTableWrap = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className=" py-1 px-2 m-auto overflow-x-scroll bg-white rounded-lg mb-4 shadow-md max-w-[1200px] w-11/12    ">
      {/* <Title title="Token Tracker" />
      <div className="overflow-auto">
        <ContentList />
        {children}
        
      </div> */}
      {children}
    </div>
  );
};

export default ItemTableWrap;
