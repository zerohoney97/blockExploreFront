import React from "react";

const TxTransferNFT = () => {
  const addressEncodeHandler = (address: string) => {
    return (
      address.substring(0, 4) + "...." + address.substring(address.length - 4)
    );
  };

  return (
    <div className="w-full h-auto p-2 border-b border-gray pb-5 md:flex md:justify-between  ">
      <div className="">
        <div className="font-bold p-2">ERC-721 Tokens Transferred:</div>
      </div>
      <div className="w-1/3">
        <img
          width={"80px"}
          height={"80px"}
          src="https://upload.wikimedia.org/wikipedia/ko/e/eb/%ED%8F%AC%EC%BC%93%EB%AA%AC%EC%8A%A4%ED%84%B0_%EB%A0%88%EB%93%9C%C2%B7%EA%B7%B8%EB%A6%B0%EC%9D%98_%ED%99%8D%EB%B3%B4_%EC%9E%91%ED%92%88%EC%97%90_%EB%AC%98%EC%82%AC_%EB%90%9C_%ED%94%BC%EC%B9%B4%EC%B8%84.png"
          alt="피카츄"
          className="m-6"
        />
        <p>
          <span>
            <span className="text-itemDetail-inventoryKeyColor">ERC-721</span>
            <span className="ml-2">Token ID[</span>
            <span className="text-blue-500 truncate">9044</span>
            <span>]</span>
            <span className="text-blue-500 truncate ml-2">Captaniz</span>
          </span>
          <br />
          <span className="font-bold text-md">From</span>
          <span className="text-blue-500 text-sm ml-2">
            {addressEncodeHandler("0x37d0aadDB833d8B62a0d259c2B0BCd82dA871D85")}
          </span>
          <span className="font-bold  text-md ml-2">To</span>
          <br />
          <span className="text-blue-500 text-sm">
            {addressEncodeHandler("0xb2ecfE4E4D61f8790bbb9DE2D1259B9e2410CEA5")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default TxTransferNFT;
