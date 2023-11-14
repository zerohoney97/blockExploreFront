"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

interface IopenToggle {
  openToggle: boolean;
  key: string;
}
// 서브메뉴 인터페이스
interface IsubMenu {
  0: Array<string>;
  1: Array<string>;
  2: Array<string>;
  [key: number]: Array<string>;
}
const MobileDropDownMenu = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
  // 서브 메뉴를 열기위한 토글
  const [isSubMenuOpen, setIsSubMenuOpen] = useState<IopenToggle>({
    openToggle: false,
    key: "",
  });

  const dropArray =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAHlBMVEX///8AAABhYWFZWVleXl5bW1uZmZlWVlZSUlKHh4c7NRlEAAACq0lEQVR4nO3Za47jIBBFYc/E6XTvf8MjVEITx3kYTFGPPt8KfMUh/MiyAAAAAAAAAAAAAAAAAAAAAAAAYOPr9jez29eyfP/J7Luc4mr9FYpWCTXvxLXexYv1lyi5/P+5uVp/i4rr/S9qxlDXZSPfKV6XB9nu4uVxYLZQ1/3AXBOfDswU6pNEc018OTBLqC8SFRkejd0zkS3UN4nmOMUPJxj/Lr69gxlC/Zho9IkHB8YN9VCikSc2DIwZ6uFEo05sHBgv1KZERayn/8BDvxcp1OZEo51i1wkWUe5ixx2sYoTamWiciacGRgj1RKIxJp4e6D3Uk4kKz49G9zOx5TfUAYkKr6c46AQLn3dxyB2sPIY6LFGvEwcP9Bfq0EQ9TlQY6CvU4Yl6m6g00E+oKokKH0//wId+z0OoaokK+1AVE/UxUX2gdajKidpPnDLQMtQJidpOnDbQKtRJiQqLp1/1od+bH+rERMXsU5x8gsXcuzj1DlYzQ52e6OyJRgPnhWqS6MyJhgPnhGqWqNB/NAyeiS3tUE0TFbqnaH6CheZdNL6DlV6oDhIVWhPdDNQK1Umi4qYw8GY9amt8qI4SFaMnuhs4+i66uoPVyKffxUO/Ny5Uh4mKUafo9ASLMXfR5R2sRoTqNlFxfqLzgedDdZ2oODcxwMBzobpPVPQ/Go6fia3eUEMkKvpOMcwJFj13McgdrNpDDZSoaJ0YbmBrqMESFS0TQw5sCTVgouLooxHqmdg6FmrQRMWRUwx8gsXnuxj2DlafQg2dqHg/McHA9/9pOPtvotfruxj+DlavQk2RqHg+MdHA56GmSVTsn/7gD/3eY6ipEhXX3CdY3N/FZHewWjMnKtbsA2uoSRMVl+wDS6iJExU/1h8AAAAAAAAAAAAAAAAAAAAAAADw2/0D1Ro1Y8h9PUkAAAAASUVORK5CYII=";
  //  서브 메뉴 토글 handler
  const subMenuHandler = (key: string) => {
    setIsSubMenuOpen((prev) => {
      if (prev.key === key) {
        return {
          openToggle: !prev.openToggle,
          key: "",
        };
      } else {
        return {
          openToggle: !prev.openToggle,
          key,
        };
      }
    });
  };
  const menuCloseCSS = "h-fit p-1  relative transition-all  -mt-40 z-00 ";
  const menuOpenCSS = "h-fit p-1 mt-2 relative transition-all  z-00 ";
  const menuArr: Array<string> = ["Blockchain", "Tokens", "NFTs"];
  const subMenuArr: IsubMenu = {
    0: ["Transactions", "Pending Transactions", "View Blocks"],
    1: ["ERC20 token transfer"],
    2: ["Latest Transfer", "Latest Mints"],
  };
  useEffect(() => {
    console.log(isMenuOpen);
    const temp = { ...isSubMenuOpen };
    temp.openToggle = false;
    setIsSubMenuOpen(temp);
  }, [isMenuOpen]);
  return (
    <div className={isMenuOpen ? menuOpenCSS : menuCloseCSS}>
      <ul className="w-full ">
        <li className="text-blue-400 mt-2">Home</li>
        {menuArr.map((el, index) => {
          return (
            <li
              className="w-full mt-2  "
              onClick={() => {
                subMenuHandler(index.toString());
              }}
              key={index}
            >
              <div className="flex justify-between items-center">
                {el}
                <Image
                  className={
                    isSubMenuOpen.openToggle &&
                    isSubMenuOpen.key === index.toString()
                      ? ""
                      : "scale-y-[-1]"
                  }
                  width={10}
                  height={10}
                  src={dropArray}
                  alt="array"
                />
              </div>
              {isSubMenuOpen.openToggle &&
                isSubMenuOpen.key === index.toString() && (
                  <div className=" h-fit">
                    <div className="w-11/12 border-2 rounded-xl border-gray-100 h-fit m-auto p-5">
                      <ul>
                        {subMenuArr[`${index}`].map((el, index) => {
                          return <li key={index}>{el}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                )}
            </li>
          );
        })}

        <li className="text-blue-400 mt-2">NickName</li>
      </ul>
    </div>
  );
};

export default MobileDropDownMenu;
