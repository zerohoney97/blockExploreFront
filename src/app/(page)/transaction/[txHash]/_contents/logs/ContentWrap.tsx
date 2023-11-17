import ItemTableWrap from "@app/_components/itemTable";
import React from "react";
import LogInputData from "./\bInputData";

const LogContentWrap: React.FC<any> = () => {
  const transactionData = {
    address: "0x769272677fab02575e84945f03eca517acc544cc",
    name: "Transfer (index_topic_1 address from, index_topic_2 address to, index_topic_3 uint256 tokenId) View Source",
    topics: [
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "0x4A089ED3282b9A35A3295E745cEc3d1Ffb5c82C3",
      "0x4A7998DF2Cd16815271bb6b7d3aE7EB30f50a73a",
      "9044",
    ],
    data: "0x",
  };

  return (
    <div className="flex justify-around border-b-2 border-gray mt-8 pb-3">
      <div className="w-16 h-16 rounded-full flex justify-center items-center bg-green-200">
        197
      </div>
      <div className="w-4/6">
        <div className="lg:flex mt-5">
          <div className="text-gray-900 font-bold text-md mb-2 lg:w-[100px] ">
            Address
          </div>
          <p className="text-gray-700 text-base text-blue-500 break-words">
            {transactionData.address}
          </p>
        </div>
        <div className="lg:flex mt-5">
          <div className="text-gray-900 font-bold text-md mt-4 mb-2 text-itemDetail-textLabelColor  lg:w-[100px]">
            Name
          </div>
          <p className="text-gray-700 text-base">{transactionData.name}</p>
        </div>
        <div className="lg:flex mt-5">
          <div className="text-gray-900 font-bold text-md mt-4 mb-2 text-itemDetail-textLabelColor  lg:w-[100px]">
            Topics
          </div>
          <div className="">
            <div className="text-gray-600 text-sm break-words mt-3">
              <span className="border-2 border-gray p-1 w-fit rounded-md bg-txDetail-inputData">
                0
              </span>{" "}
              <div className="mt-3"> {transactionData.topics[0]}</div>
            </div>
            <div className="text-gray-600 text-sm break-words mt-3">
              <span className="border-2 border-gray p-1 w-fit rounded-md bg-txDetail-inputData">
                1: from
              </span>{" "}
              <span>→</span>{" "}
              <div className="text-blue-500 mt-3 lg:inline-block">
                {transactionData.topics[1]}
              </div>
            </div>
            <div className="text-gray-600 text-sm break-words mt-3 ">
              <span className="border-2 border-gray p-1 w-fit rounded-md bg-txDetail-inputData">
                2: to
              </span>{" "}
              <span>→</span>{" "}
              <div className="text-blue-500 mt-3 lg:inline-block">
                {transactionData.topics[2]}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:flex mt-5">
          {" "}
          <div className="text-gray-900 font-bold text-xl mt-4 mb-2 text-itemDetail-textLabelColor  lg:w-[100px]">
            Data
          </div>
          <LogInputData>
            <p className="text-gray-700 text-base">{transactionData.data}</p>
          </LogInputData>
        </div>
      </div>
    </div>
  );
};

export default LogContentWrap;
