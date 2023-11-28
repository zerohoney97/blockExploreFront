import React from "react";
import Image from "next/image";
import Logo from "public/Logo.png";

const PcFooter = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-[1400px] m-auto h-80  p-8 md:border-t border-gray  ">
        <div className=" h-20 flex justify-end border-2 border-white border-b-gray">
          <img
            src="https://static.thenounproject.com/png/1590838-200.png"
            alt="top"
            className="w-10 h-10 cursor-pointer"
          />
        </div>
        <div className="w-full h-1/3 flex  items-center">
          <Image src={Logo} alt="바운스코드 이미지" width={50} />
          <div className="text-lg ml-10 font-bold dark:text-white">
            Bounce Explorer EtherScan
          </div>
        </div>
        <div className="h-20">
          <ul className="ml-2 h-full text-xs flex flex-col justify-center dark:text-white">
            <li>EtherScan @2023 (private network)</li>
            <li> Terms of Service Network Status</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PcFooter;
