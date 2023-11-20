"use client";
import Image from "next/image";
import React, { useState } from "react";
import ham from "public/burger.png";
import MobileDropDownMenu from "./MobileDropDownMenu";
import { IDropMenuProps } from "../interface";
import Link from "next/link";

const MobileHeader: React.FC<IDropMenuProps> = ({ router }) => {
  const [isMenuOpen, setIsMeuOpen] = useState<boolean>(false);
  return (
    <div className="w-full min-h-[60px]  h-fit relative ">
      <div className=" w-full min-h-[60px] h-full flex justify-between items-center relative z-10 bg-white  ">
        <Link href={"http://localhost:3000/"}>
          <div className="w-40 h-10 flex justify-between items-center">
            <img src="" alt="Bounce code image" className="ml-2" />
            <div>Bounce Code</div>
          </div>
        </Link>

        <div className=" top-16 w-14 h-full text-right ">
          <Image
            className="w-6"
            src={ham}
            alt="메뉴 버튼"
            onClick={() => {
              setIsMeuOpen((prev) => {
                return !prev;
              });
            }}
          />
        </div>
      </div>
      <MobileDropDownMenu router={router} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default MobileHeader;
