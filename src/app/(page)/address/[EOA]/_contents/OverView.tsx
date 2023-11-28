import ItemTableWrap from "@app/_components/itemTable";
import React from "react";

const  AddressOverView = () => {
  return (
    <ItemTableWrap>
      <div className="w-full h-auto flex flex-col  pb-5 ">
        <div className="font-bold">Overview</div>
        <div className="flex flex-col">
          <div className="lg:flex lg:items-center">
            {" "}
            <div className="font-bold p-2 text-itemDetail-textLabelColor lg:w-[250px] text-sm">
              ETH BALLANCE:
            </div>
            <div className="p-1 h-auto text-sm   w-60 sm:break-words lg:ml-8 md:break-words ">
              <span>0.</span>
              <span>002575841931814377 ETH</span>
            </div>
          </div>
          <div className="lg:flex lg:items-center">
            <div className="font-bold p-2 text-itemDetail-textLabelColor lg:w-[250px] text-sm">
              LAST TXN SENT:
            </div>
            <div className="p-1 h-auto text-sm flex  w-80 sm:break-words lg:ml-8 md:break-words">
              <div className="text-blue-500 w-40 truncate">
                0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738
              </div>
              <div className="text-itemDetail-textLabelColor">
                from 16 secs ago
              </div>
            </div>{" "}
          </div>

          <div className="lg:flex lg:items-center">
            <div className="font-bold p-2 text-itemDetail-textLabelColor lg:w-[250px] text-sm">
              FRIST TXN SENT:
            </div>
            <div className="p-1 h-auto text-sm flex  sm:w-80 sm:break-words lg:ml-8  lg:w-96">
              <div className="text-blue-500 w-40 truncate">
                0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738
              </div>
              <div className="text-itemDetail-textLabelColor">
                from 1472 days 18 hrs ago
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </ItemTableWrap>
  );
};

export default AddressOverView;
