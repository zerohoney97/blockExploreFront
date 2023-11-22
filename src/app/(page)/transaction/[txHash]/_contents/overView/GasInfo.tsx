import React from "react";

const TxGasInfo = () => {
  const etherIcon =
    "https://w7.pngwing.com/pngs/889/143/png-transparent-ethereum-computer-icons-cryptocurrency-blockchain-valentines-day-party-miscellaneous-angle-triangle.png";
  return (
    <div className="w-full h-auto flex flex-col pb-5 ">
      <div className="flex flex-col">
        <div className="lg:flex lg:items-center">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px] ">
            Value:
          </div>
          <div className="p-1 h-auto text-xs break-words  w-20 text-itemDetail-txGasInfoColor flex justify-around lg:ml-10 ">
            <img src={etherIcon} alt="이더 아이콘" className="w-5 h-5 " />
            <div className="">0 ETH</div>
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          {" "}
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            Transaction Fee:
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-xs p-1 text-itemDetail-txGasInfoColor lg:ml-10">
                0.003913791993582968 ETH
              </span>
            </div>
          </div>
        </div>
        <div className="lg:flex lg:items-center">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            Gas Fee:
          </div>
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-xs p-1 text-itemDetail-txGasInfoColor lg:ml-10">
                22.466975084 Gwei
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxGasInfo;
