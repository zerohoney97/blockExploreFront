import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MainTransactionsIndicator = () => {
  return (
    <div className='w-[40px] mr-[10px]'>
      <span className='flex justify-center text-[#eef3f2] sm:w-[25px] md:w-[30px] lg:w-[30px]'><FontAwesomeIcon icon={faSquare} /></span>
    </div>
  );
};

export default MainTransactionsIndicator;
