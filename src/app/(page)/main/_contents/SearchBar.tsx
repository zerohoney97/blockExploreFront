"use client"
import React, { useState } from "react";
import Link from "next/link";

const SearchBar = () => {
  const [value, setValue] = useState("");
  return (
    <div className='bg-blue-900 h-[250px] w-full flex justify-center'>
      <div className='bg-white w-11/12 h-[48px] leading-[48px] m-auto rounded-lg text-center'>
        <input className="w-10/12 h-[34px] m-auto rounded-lg text-sm" placeholder="Search by Address / Txn Hash / Block /" onChange={(e)=> setValue(e.target.value)} />
        <Link href={`/main/search/${value}`}>
          <span className="bg-blue-300 p-[7px] rounded-lg">🔍</span>
        </Link>
      </div>
    </div>
  );
};

export default SearchBar;
