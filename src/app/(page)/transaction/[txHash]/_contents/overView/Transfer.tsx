import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import copy from "public/copy.png";
import React from "react";
import Link from "next/link";

const TxTransfer = () => {
  return (
    <div className="w-full h-auto flex flex-col border-b border-gray pb-5 dark:text-white">
      <div className="flex flex-col">
        <div className="lg:flex lg:m-3 lg:items-center ">
          <div className="text-sm font-medium p-2 lg:text-itemDetail-textLabelColor lg:w-[250px]">
            From:
          </div>
          <div className="p-1 h-10 text-xs lg:ml-4   ">
            <div className="p-1 h-auto text-xs   sm:w-80 md:w-80  sm:break-words md:break-words lg:w-auto">
              <Link href={`/address/0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738`}>
                <span className="text-text-mainTextColor">
                  0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738
                </span>
              </Link>

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
              <Link  href={`/address/0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738`}>
              <span className="text-text-mainTextColor">
                0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738
              </span>
              </Link>
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
