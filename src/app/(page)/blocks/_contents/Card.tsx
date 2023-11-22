import React from "react";

export const BlockCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" py-1 px-2 m-auto  bg-white rounded-lg mb-4 shadow-md min-w-[280px]  max-w-[1250px] w-11/12 mt-10  ">
          {children}
        </div>
      )
};
