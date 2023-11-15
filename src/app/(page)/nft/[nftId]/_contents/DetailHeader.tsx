import React from "react";

const NFTDetailHeader = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="md:w-[48%] md:justify-between md:m-auto md:flex lg:flex lg:w-1/2">
      {children}
    </div>
  );
};

export default NFTDetailHeader;
