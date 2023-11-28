import { ITransactionDetailProps } from "@app/(page)/transaction/interface";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import copy from "public/copy.png";
import React from "react";

const TxTransfer: React.FC<ITransactionDetailProps> = ({transactionItemData}) => {
  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5 dark:text-white">
      <div className="flex flex-col">
        <div className="lg:flex lg:m-3 lg:items-center ">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            From:
          </div>
          <div className="p-1 h-10 text-xs lg:ml-4   ">
            <div className="p-1 h-auto text-xs   sm:w-80 md:w-80  sm:break-words md:break-words lg:w-auto">
              <span className="text-text-mainTextColor">
                {transactionItemData.from}
              </span>
              <FontAwesomeIcon
                icon={faCopy}
                className=" ml-2   "
                width={15}
                height={3}
              />
            </div>
          </div>
        </div>
        <div className="lg:flex lg:m-3 lg:items-center">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            To:
          </div>
          <div className="p-1 h-10 text-xs  lg:ml-4 ">
            <div className="p-1 h-auto text-xs sm:w-80 md:w-80 sm:break-words md:break-words lg:w-auto ">
              <span className="text-text-mainTextColor">
             {transactionItemData.to}
              </span>
              <FontAwesomeIcon
                icon={faCopy}
                className=" ml-2  "
                width={15}
                height={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TxTransfer;
