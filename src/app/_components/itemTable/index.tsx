import React from "react";
import Title from "../itemTitle";

const ItemTableWrap = ({ children }: { children: React.ReactNode }) => {
  
  return (
    <div className=" py-1 px-2 m-auto overflow-x-scroll bg-white rounded-lg mb-4 shadow-md max-w-[1250px] w-11/12 ">
      {children}
    </div>
  );
};

export default ItemTableWrap;
