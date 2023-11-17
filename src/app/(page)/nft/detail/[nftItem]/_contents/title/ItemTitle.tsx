import Link from "next/link";
import React from "react";

const NftItemTitle = () => {
  return (
    <>
      <div className='w-full my-[20px]'>
        <h1 className="text-[17px] font-bold">BoredApeYachtCl...</h1>
        <p className="text-blue-400">
          👽
          <Link href=''>Bored Ape Yacht Club</Link>
          🚩
        </p>
      </div>
    </>
  );
};

export default NftItemTitle;
