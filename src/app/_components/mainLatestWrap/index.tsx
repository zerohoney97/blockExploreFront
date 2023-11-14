import React from "react";
import LatestWrapTitle from "../mainLatestWrapTitle";
import { ILatestWrapProps } from "./interface";
import MainLatestWrapButton from "../mainLatestWrapButton";

const MainLatestWrap: React.FC<ILatestWrapProps> = ({
  title,
  children,
  // buttonName
}) => {
  return (
    <div className='border-stone-300 border-[1px] w-11/12 bg-white m-auto rounded-xl overflow-hidden mt-[30px] mb-[30px]'>
      <LatestWrapTitle title={title} />
      {children}
      {/* <MainLatestWrapButton buttonName={buttonName} /> */}
      {/* <MainLatestWrapButton buttonName={buttonName} /> */}
    </div>
  );
};

export default MainLatestWrap;
