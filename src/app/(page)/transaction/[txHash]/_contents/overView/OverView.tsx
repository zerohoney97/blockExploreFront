import React from "react";
import copy from "public/copy.png";
import Image from "next/image";
const TxOverView = () => {
  const clock =
    "https://w7.pngwing.com/pngs/712/835/png-transparent-computer-icons-clock-icon-design-clock-time-rim-timer.png";
  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5 ">
      <div className="flex flex-col">
        <div className="lg:flex">
          {" "}
          <div className="font-bold p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            Transaction Hash:
          </div>
          <div className="p-1 h-auto text-sm break-words  w-80 lg:ml-8 ">
            0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738
            <Image
              className="float-right m-1 "
              src={copy}
              alt="종이 아이콘"
              width={15}
              height={3}
            />
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          <div className="font-bold p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            Status:{" "}
          </div>
          <div className="text-xs px-1 py-1   flex justify-center items-center rounded-lg border-2 border-green-600 bg-green-200 text-green-600 sm:w-16 md:w-16 lg:ml-8  lg:h-7">
            Success
          </div>{" "}
        </div>

        <div className="lg:flex">
          <div className="font-bold p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            Time Stamp
          </div>
          <div className="flex flex-col ml-8">
            <div className="flex">
              <img
                className="m-1 max-h-[10px]"
                src={clock}
                alt="시계 아이콘"
                width={15}
                height={3}
              />{" "}
              <span className="text-sm">
                7 mins ago (Nov-15-2023 06:43:59 AM +UTC)
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxOverView;
