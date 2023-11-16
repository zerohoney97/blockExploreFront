import React from "react";
import TxInputData from "./InputData";
import { IMordeDetailToggleProps } from "@app/(page)/transaction/interface";

const TxOnMoreDetail: React.FC<IMordeDetailToggleProps> = ({
  mordeDetailToggle,
  moreDetailToggleHandler,
}) => {
  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5 relative ">
      {/* 애니메이션 */}
      <div
        className={`${
          mordeDetailToggle
            ? "h-[300px] relative"
            : "h-0 overflow-hidden "
        } transition-all  z-0`}
      >
        <div className="w-full h-72 min-h-72 flex flex-col">
          <div className="lg:flex lg:items-center">
            <div className="font-bold p-2 lg:text-itemDetail-textLabelColor lg:w-[250px] ">
              Gas Limit & Usage by Txn:
            </div>
            <div className="p-1 h-auto text-sm break-words text-itemDetail-txGasInfoColor  lg:ml-10 ">
              <span className="">217,522</span>{" "}
              <span className="border-r-2 mx-3  border-txDetail-moreDetailBorderRight"></span>
              <span className="">174,202(80.88%)</span>
            </div>
          </div>
          <div className="lg:flex lg:items-center">
            {" "}
            <div className="font-bold p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
              Gas Fees:
            </div>
            <div className="p-1 lg:ml-10">
              <span className="text-itemDetail-textLabelColor">Base:</span>{" "}
              <span> 21.966975084 Gwei</span>
              <span className="border-r-2 mx-3  border-txDetail-moreDetailBorderRight"></span>
              <span className="text-itemDetail-textLabelColor">Max:</span>{" "}
              <span> 24.759 Gwei</span>
              <span className="border-r-2 mx-3  border-txDetail-moreDetailBorderRight"></span>
              <span className="text-itemDetail-textLabelColor">
                Max Priority:
              </span>{" "}
              <span>0.5Gwei</span>
            </div>
          </div>
          <div className="w-full lg:flex lg:items-center ">
            <div className="font-bold p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
              Input Data:
            </div>
            <div className=" w-2/3 flex flex-col">
              <TxInputData />
            </div>
          </div>
        </div>
      </div>

      {/* 애니메이션 */}
      <div
        className={`${
          mordeDetailToggle && "mt-5"
        } w-full flex items-center relative  h-16  z-5 bg-white transition-all sm:justify-between`}
      >
        <div className="font-bold lg:text-itemDetail-textLabelColor lg:w-[250px] ">
          More Detail
        </div>
        <div
          className=" text-blue-500 cursor-pointer  lg:ml-8 "
          onClick={moreDetailToggleHandler}
        >
          {mordeDetailToggle ? "-" : "+"} Click To Show More
        </div>
      </div>
    </div>
  );
};

export default TxOnMoreDetail;
