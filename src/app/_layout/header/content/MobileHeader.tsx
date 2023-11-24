"use client";
import Image from "next/image";
import React, { useState } from "react";
import ham from "public/burger.png";
import MobileDropDownMenu from "./MobileDropDownMenu";
import { IDropMenuProps } from "../interface";
import Link from "next/link";
import DarkModeToggle from "@app/_components/darkToggle";
import Logo from "../../../../../public/Logo.png"

const MobileHeader: React.FC<IDropMenuProps> = ({ router }) => {
  const [isMenuOpen, setIsMeuOpen] = useState<boolean>(false);
  return (
    <div className="  min-h-[60px]  h-fit relative">
      <div className=" p-4 min-h-[60px] h-full flex justify-between items-center relative z-10 bg-white  dark:bg-black">
        <Link href={"/"}>
          <div className="w-40 h-10 flex justify-between items-center">
            <Image
              src={Logo}
              alt="바운스코드 이미지"
              width={50}
            />
            <div className=" dark:text-white">Bounce Code</div>
          </div>
        </Link>
        <div className="flex"> 
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
        <DarkModeToggle/>
       </div>
      </div>
      <MobileDropDownMenu router={router} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default MobileHeader;
