import React from "react";
import MainLatestWrapTitle from "../mainLatestWrapTitle";
import { ILatestWrapProps } from "./interface";

const MainLatestWrap: React.FC<ILatestWrapProps> = ({
  title,
  children,
}) => {
  return (
    <div className='border-stone-300 border-[1px] w-11/12 bg-white m-auto rounded-xl overflow-hidden mt-[30px] mb-[30px]'>
      <MainLatestWrapTitle title={title} />
      {children}
    </div>
  );
};

export default MainLatestWrap;
