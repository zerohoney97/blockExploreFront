"use client"
import React, { useState } from "react";
import Link from "next/link";

const MainSearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <div className='bg-white flex h-[48px] leading-[48px] rounded-lg whitespace-nowrap m-auto sm:w-11/12 md:w-[500px] lg:w-[500px]'>
      <input
        className='h-[34px] m-auto rounded-lg text-sm ml-[3px] w-11/12'
        placeholder='Search by Address / Txn Hash / Block / Token / Domain Name'
        onChange={(e) => setValue(e.target.value)}
      />
      <Link href={`/main/search/${value}`}>
        <span className='bg-blue-300 rounded-lg p-[7px] mx-[5px]'>🔍</span>
      </Link>
    </div>
  );
};

export default MainSearchBar;
