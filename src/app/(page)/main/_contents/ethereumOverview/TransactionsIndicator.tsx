import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MainTransactionsIndicator = () => {
  return (
    <div className='w-[40px] mr-[10px]'>
      <span className='flex justify-center text-black/30 sm:w-[25px] md:w-[30px] lg:w-[30px]'>
      <FontAwesomeIcon icon={faServer} />
      </span>
    </div>
  );
};

export default MainTransactionsIndicator;
