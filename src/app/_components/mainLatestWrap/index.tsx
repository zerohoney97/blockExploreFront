import React from "react";
import LatestWrapTitle from "../mainLatestWrapTitle";
import LatestWrapButton from "../mainLatestWrapButton";
import { latestWrapProps } from "./interface";

const MainLatestWrap: React.FC<latestWrapProps> = ({
  title,
  children,
  buttonName,
}) => {
  return (
    <div className='border-stone-300 border-[1px] w-11/12 bg-white m-auto rounded-xl overflow-hidden mt-[30px] mb-[30px]'>
      <LatestWrapTitle title={title} />
      {children}
      <LatestWrapButton buttonName={buttonName} />
    </div>
  );
};

export default MainLatestWrap;
