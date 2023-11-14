import React from "react";

interface Props{
  title : string
}

const LatestWrapTitle:React.FC<Props> = ({title}) => {
  return (
    <h2 className='h-[51px] leading-[51px] border-gray border-b-[1px] font-bold pl-5'>
      Latest {title}
    </h2>
  );
};

export default LatestWrapTitle;
