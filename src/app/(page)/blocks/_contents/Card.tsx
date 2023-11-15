import React from "react";

export const BlockCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" p-4 bg-white rounded-lg m-4 shadow-md h-20 ">
          {children}
        </div>
      )
};
