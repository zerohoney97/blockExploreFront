import React from "react";
import { latestWrapTitleProps } from "./interface";


const MainLatestWrapTitle:React.FC<latestWrapTitleProps> = ({title}) => {
  return (
    <h2 className='h-[51px] leading-[51px] border-gray border-b-[1px] font-bold pl-5'>
      Latest {title}
    </h2>
  );
};

export default MainLatestWrapTitle;
