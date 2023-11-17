import Image from "next/image";
import copy from "public/copy.png";
import React from "react";

const TxTransfer = () => {
  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5">
      <div className="flex flex-col">
        <div className="lg:flex lg:m-3 lg:items-center ">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            From:
          </div>
          <div className="p-1 h-10 text-xs lg:ml-4  ">
            <div className="p-1 h-auto text-xs   w-80 text-blue-500 sm:break-words md:break-words">
              0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738
              <Image
                className=" m-1  sm:float-right md:float-right"
                src={copy}
                alt="종이 아이콘"
                width={15}
                height={3}
              />
            </div>
          </div>
        </div>
        <div className="lg:flex lg:m-3 lg:items-center">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            To:
          </div>
          <div className="p-1 h-10 text-xs  lg:ml-4 ">
            <div className="p-1 h-auto text-xs   w-80 text-blue-500 sm:break-words md:break-words ">
              0xb2ecfE4E4D61f8790bbb9DE2D1259B9e2410CEA5
              <Image
                className=" m-1 sm:float-right md:float-right"
                src={copy}
                alt="종이 아이콘"
                width={15}
                height={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxTransfer;
