import React from "react";
import { HoldersItemProps } from "./interface";

const holdersItem: React.FC<HoldersItemProps> = ({ HoldersItem }) => {
    return (
        <div className="h-14 border-b border-gray flex relative ">
          <div className="w-[5%] flex  items-center justify-center p-2 relative">
            {HoldersItem.rank}
          </div>
          <div
            className=" w-[20%]   truncate  p-2"
            style={{
              lineHeight: "2.3rem",
            }}
          >
            {HoldersItem.address}
          </div>
          <div className=" w-[10%] flex justify-center items-center  p-2 ">
            {HoldersItem.quantity}
          </div>
          <div className=" w-[10%] flex justify-center items-center  p-2  ">
            {HoldersItem.percentage}
          </div>
          <div className=" w-[10%] flex justify-center items-center p-2  ">
            {HoldersItem.value}
          </div>

        </div>
      );
}

export default holdersItem