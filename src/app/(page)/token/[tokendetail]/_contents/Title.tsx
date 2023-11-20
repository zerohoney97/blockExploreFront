import React, { useEffect } from "react";

interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title }) => {
  
  return (
    <div className="flex m-auto flex-wrap items-center gap-3 py-5">
      <h1 className="font-semibold text-tablePage-textColor ">{title}</h1>
      
      
    </div>
  );
};

export default Title;