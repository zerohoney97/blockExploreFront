import React from "react";

interface TokenCardProps {
  title: string;
  price: string;
  fully: string;
  CIRCULATING: string;
}

const index: React.FC<TokenCardProps> = ({
  title,
  price,
  fully,
  CIRCULATING,
}) => {
  return (
    <div className=" flex flex-col gap-5">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div className="text-xs">{price}</div>
      <div className="text-xs">{fully}</div>
      <div className="text-xs">{CIRCULATING}</div>
    </div>
  );
};

export default index;
