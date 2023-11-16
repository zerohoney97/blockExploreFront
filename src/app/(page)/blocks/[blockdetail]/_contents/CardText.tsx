import React, { ReactNode } from "react";

interface CardTextProps{
    title:string
    content:string
    children?: ReactNode;
}

const CardText:React.FC<CardTextProps> = ({title,content, children }) => {
  return (
    <div className="my-3 md:flex lg:flex items-center">
      <div className="font-medium text-sm md:text-itemDetail-textLabelColor mr-2 w- lg:text-itemDetail-textLabelColor">
        {title}
      </div>
      <span className="text-xs">{content}
      {children && <span className="text-xs">{children}</span>}
       </span>
      
    </div>
  );
};

export default CardText;
