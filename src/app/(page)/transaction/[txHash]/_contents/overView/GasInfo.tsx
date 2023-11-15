import React from "react";

const TxGasInfo = () => {
  const etherIcon =
    "https://w7.pngwing.com/pngs/889/143/png-transparent-ethereum-computer-icons-cryptocurrency-blockchain-valentines-day-party-miscellaneous-angle-triangle.png";
  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5 ">
      <div className="flex flex-col">
        <div className="md:flex">
          <div className="font-bold p-2">Value:</div>
          <div className="p-1 h-auto text-sm break-words  w-20 text-itemDetail-txGasInfoColor flex justify-around  ">
            <img src={etherIcon} alt="이더 아이콘" width={20} height={20} />
            <div className="">0 ETH</div>
          </div>
        </div>
        <div className="md:flex">
          {" "}
          <div className="font-bold p-2">Transaction Fee:</div>
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-sm p-1 text-itemDetail-txGasInfoColor">
                0.003913791993582968 ETH
              </span>
            </div>
          </div>
        </div>
        <div className="md:flex">
          <div className="font-bold p-2">Gas Fee:</div>
          <div className="flex flex-col">
            <div className="flex">
              <span className="text-sm p-1 text-itemDetail-txGasInfoColor">
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
