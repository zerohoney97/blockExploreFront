/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TxItemProps } from "./ineterface";

const TxItem: React.FC<TxItemProps> = ({ TxItem, toggleHandler }) => {
  return (
    <div className="w-[300%] h-14 border-b border-gray flex relative ">
      <div className="w-[5%] flex  items-center justify-center p-2 relative">
        <div className="relative">
          <img
            src="https://i.pinimg.com/originals/ce/9c/4e/ce9c4e4f06e724a10b3766845f93a051.png"
            alt="detail"
            className="w-5 h-5 cursor-pointer "
            onClick={toggleHandler}
          />
        </div>
      </div>

      <div
        className=" w-[20%]   truncate  p-2"
        style={{
          lineHeight: "2.3rem",
        }}
      >
        {TxItem.txHash}
      </div>
      <div className=" w-[10%] flex justify-center items-center  p-2 ">
        {TxItem.method}
      </div>
      <div className=" w-[10%] flex justify-center items-center  p-2  ">
        {TxItem.block}
      </div>
      <div className=" w-[10%] flex justify-center items-center p-2  ">
        {TxItem.age}
      </div>
      <div
        className=" w-[20%]   truncate p-2"
        style={{
          lineHeight: "2.3rem",
        }}
      >
        {TxItem.from}
      </div>
      <div
        className=" w-[20%]   truncate p-2"
        style={{
          lineHeight: "2.3rem",
        }}
      >
        {TxItem.to}
      </div>
      <div className=" w-[10%] flex justify-center items-center p-2  ">
        {TxItem.value}
      </div>
    </div>
  );
};

export default TxItem;
