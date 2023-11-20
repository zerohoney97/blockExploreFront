"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import searchIcon from "../../../../../../public/search06.png";

const MainSearchBar = () => {
  const [value, setValue] = useState("");

  return (
    <div className="bg-white flex h-[58px] leading-[58px] rounded-lg whitespace-nowrap m-auto sm:w-11/12 md:w-[500px] lg:w-[500px]">
      <input
        className="h-[34px] m-auto rounded-lg text-sm ml-[10px] w-11/12"
        placeholder="Search by Address / Txn Hash / Block / Token / Domain Name"
        onChange={(e) => setValue(e.target.value)}
      />
      <Link href={`/main/search/${value}`}>
        <span className="p-2 flex">
          <Image src={searchIcon} alt="Search Icon" width={40} height={40} />
        </span>
      </Link>
    </div>
  );
};

export default MainSearchBar;