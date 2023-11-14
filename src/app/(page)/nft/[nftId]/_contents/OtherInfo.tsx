import Image from "next/image";
import React from "react";
import copy from "../../../../../../public/copy.png";
const OtherInfo = () => {
  return (
    <div className="w-full h-full flex flex-col items-start">
      <div className="m-5 text-lg  font-bold h-1/4">Other Info</div>
      <div className="m-5  h-1/4">
        <div className="text-itemDetail-textLabelColor">TOKEN CONTRACT</div>
        <div className="w-full grid grid-cols-2 gap-4 mt-4 ">
          <Image
            className="flex "
            src={copy}
            alt="종이 아이콘"
            width={15}
            height={3}
          />
          <div className="truncate text-blue-600">0xasdasdkjaqwjhrqwjyrqwjyeasddsa</div>
        </div>
      </div>
    </div>
  );
};

export default OtherInfo;
