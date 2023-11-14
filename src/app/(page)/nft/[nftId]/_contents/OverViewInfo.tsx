import React from "react";

const OverViewInfo = () => {
  return (
    <div className="w-full h-full flex flex-col items-start">
      <div className="m-5 text-lg  font-bold h-1/4">Overview</div>
      <div className="m-5  h-1/4">
        <div className="text-itemDetail-textLabelColor">MAX TOTAL SUPPLY</div>
        <div className="">123123</div>
      </div>
      <div className="m-5  h-1/4">
        <div className="text-itemDetail-textLabelColor">HOLDERS</div>
        <div className="">25,301</div>
      </div>
      <div className="m-5  h-1/4">
        <div className="text-itemDetail-textLabelColor">TOTAL TRANSFERS</div>
        <div className="">-</div>
      </div>
    </div>
  );
};

export default OverViewInfo;
