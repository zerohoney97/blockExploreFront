import React from "react";

const MarketInfo = () => {
  return (
    <div className="w-full h-full flex flex-col items-start">
      <div className="m-5 text-lg  font-bold h-1/4">Market</div>
      <div className="m-5  h-1/4">
        <div className="text-itemDetail-textLabelColor">VOLUME(24H)</div>
        <div className="">
          {" "}
          <span>40</span> <span>ETH</span>{" "}
        </div>
      </div>
      <div className="m-5  h-1/4">
        <div className="text-itemDetail-textLabelColor">MIN PRICE(24H)</div>
        <div className="">
          {" "}
          <span>$</span> <span>770,18.03</span> <span>@40.0000000ETH</span>{" "}
        </div>
      </div>
      <div className="m-5  h-1/4">
        <div className="text-itemDetail-textLabelColor">MAX PRICE(24H)</div>
        <div className="">
          <span>$</span> <span>770,18.03</span> <span>@40.0000000ETH</span>
        </div>
      </div>
    </div>
  );
};

export default MarketInfo;
