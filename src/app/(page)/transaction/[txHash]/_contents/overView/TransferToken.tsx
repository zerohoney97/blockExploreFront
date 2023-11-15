import React from "react";

const TxTransferToken = () => {
  const addressEncodeHandler = (address: string) => {
    return (
      address.substring(0, 4) + "...." + address.substring(address.length - 4)
    );
  };
  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5">
      <div className="flex flex-col">
        <div className="font-bold p-2">ERC-721 Tokens Transferred:</div>
        <div className="w-full h-auto p-2">
          <p>
            <span className="font-bold text-sm">From</span>{" "}
            <span className="text-blue-600 text-xs">
              {addressEncodeHandler(
                "0x37d0aadDB833d8B62a0d259c2B0BCd82dA871D85"
              )}
            </span>
            <span className="font-bold ml-1 text-sm">To</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TxTransferToken;
