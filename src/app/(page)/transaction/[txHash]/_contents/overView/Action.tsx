import React from "react";

const TxAction = () => {
  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5">
      <div className="flex flex-col">
        <div className="font-bold p-2">Transaction Action:</div>
        <div className="p-1 h-10 text-sm   ">
          <div className="w-44 p-1 truncate">
            Transfer 1 Of <span className="text-blue-500"> CapTainz</span>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxAction;
