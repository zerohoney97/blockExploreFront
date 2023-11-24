import React from "react";
import Image from "next/image";
import Logo from "public/Logo.png";

const MobileFooter = () => {
  return (
    <div className="w-full h-44 bg-white border-t border-gray  bottom-0 p-4  dark:bg-black  ">
      <div className=" w-full h-12 flex justify-between items-center">
        <div className="w-3/4  h-1/3 flex justify-between items-center">
          <Image src={Logo} alt="바운스코드 이미지" width={50} />
          <div className="text-lg font-bold dark:text-white">
            Bounce Explorer EtherScan
          </div>
        </div>
        <div className="w-10 ml-2 ">
          <img
            src="https://static.thenounproject.com/png/1590838-200.png"
            alt="top"
            className="w-10 h-10"
          />
        </div>
      </div>
      <div className="h-0.5 bg-gray-300 w-full m-auto mt-3"></div>
      <div className="h-20 dark:text-white">
        <ul className="h-full text-xs flex flex-col justify-center">
          <li>EtherScan @2023 (private network)</li>
          <li> Terms of Service Network Status</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileFooter;
