import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const MainBlockIndicator = () => {
  return (
    <div className='w-[40px] mr-[10px]'>
      <span className='flex justify-center text-gray sm:w-[25px] md:w-[30px] lg:w-[30px]'>
        <FontAwesomeIcon icon={faGauge} />
      </span>
    </div>
  );
};

export default MainBlockIndicator;
