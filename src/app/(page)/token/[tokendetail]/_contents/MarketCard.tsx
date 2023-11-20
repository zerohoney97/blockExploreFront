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
    <div className=" flex flex-col gap-5 text-sm">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div>
        <div >Price</div>
        <div >${price}</div>
      </div>
      <div>
        <div>FULLY DILUTED MARKET CAP</div>
        <div>${fully}</div>
      </div>
      <div>
        <div>CIRCULATING SUPPLY MARKET CAP</div>
        <div>${CIRCULATING}</div>
      </div>
    </div>
  );
};

export default index;
