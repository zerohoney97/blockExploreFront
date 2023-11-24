import React, { ReactNode } from "react";

interface CardTextProps {
  title: string;
  content: string | React.ReactNode;
  content2?: string;
  children?: ReactNode;
}

const CardText: React.FC<CardTextProps> = ({
  title,
  content,
  content2,
  children,
}) => {
  return (
    <div className="my-3 break-words md:flex lg:flex">
      <div className="font-medium text-sm md:text-itemDetail-textLabelColor mr-2 w-36 lg:text-itemDetail-textLabelColor">
        {title}
      </div>
      <span className="text-xs">
        {content}
        {content2}
        {children && <span className="text-xs">{children}</span>}
      </span>
    </div>
  );
};

export default CardText;
