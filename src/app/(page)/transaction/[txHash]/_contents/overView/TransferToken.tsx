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
            <span className="font-bold text-md">From</span>{" "}
            <span className="text-blue-500 text-sm">
              {addressEncodeHandler(
                "0x37d0aadDB833d8B62a0d259c2B0BCd82dA871D85"
              )}
            </span>{" "}
            <span className="font-bold ml-1 text-md">To</span>
            <br />
            <span className="text-blue-500 text-sm">
              {addressEncodeHandler(
                "0xb2ecfE4E4D61f8790bbb9DE2D1259B9e2410CEA5"
              )}
            </span>
            <span className="font-bold text-md ml-1">For</span>
            <span className="text-sm ml-1">0.15477</span>
            <br />
            <span className="text-blue-500 text-sm ml-1">Blur Pool</span>
          </p>
        </div>
        <div className="w-full h-auto p-2">
          <p>
            <span className="font-bold text-md">From</span>{" "}
            <span className="text-blue-500 text-sm">
              {addressEncodeHandler(
                "0x37d0aadDB833d8B62a0d259c2B0BCd82dA871D85"
              )}
            </span>{" "}
            <span className="font-bold ml-1 text-sm">To</span>
            <br />
            <span className="text-blue-500 text-sm">
              {addressEncodeHandler(
                "0xb2ecfE4E4D61f8790bbb9DE2D1259B9e2410CEA5"
              )}
            </span>
            <span className="font-bold text-sm ml-1">For</span>
            <span className="text-sm ml-1">0.15477</span>
            <br />
            <span className="text-blue-500 text-sm ml-1">Blur Pool</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TxTransferToken;
