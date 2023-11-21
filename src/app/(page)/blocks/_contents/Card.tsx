import React from "react";

export const BlockCard = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" p-4 bg-white rounded-lg shadow-md  w-11/12 m-auto mt-5 ">
          {children}
        </div>
      )
};
