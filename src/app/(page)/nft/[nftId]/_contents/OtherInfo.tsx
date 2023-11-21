import Image from "next/image";
import React from "react";
import copy from "../../../../../../public/copy.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
const OtherInfo = () => {
  return (
    <div className="w-full h-1/4 flex flex-col items-start">
      <div className="m-5 text-lg  font-bold h-1/4">Other Info</div>
      <div className="m-5  h-1/4">
        <div className="text-itemDetail-textLabelColor">TOKEN CONTRACT</div>
        <div className="w-full flex items-center  ">
          <div className="truncate w-2/3 text-blue-600">
            0xasdasdkjaqwjhrqwjyrqwjyeasddsa
          </div>
          <FontAwesomeIcon icon={faCopy} className="ml-4" />
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
