"use client"
import { faCircleCheck, faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";

const NftItemTitle = () => {
  return (
    <>
      <div className='w-full my-[20px]'>
        <h1 className="text-[17px] font-bold">BoredApeYachtCl...</h1>
        <p className="text-blue-400 bg-yellow">
          <span className="mr-2"><FontAwesomeIcon icon={faStar} /></span>
          <Link href='' className="mr-2">Bored Ape Yacht Club</Link>
          <FontAwesomeIcon icon={faCircleCheck} />
        </p>
      </div>
    </>
  );
};

export default NftItemTitle;
