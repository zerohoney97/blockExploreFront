import React from "react";

interface TokenCardProps {
  title: string;
  volume: string;
  minPrice: string;
  maxPrice: string;
}

const index: React.FC<TokenCardProps> = ({
  title,
  volume,
  minPrice,
  maxPrice,
}) => {
  return (
    <div className=" flex flex-col gap-5 text-sm ">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div>
        <div>Volume (24H) </div>
        <div>${volume}</div>
      </div>
      <div>
        <div>Min Price (24H)</div>
        <div>${minPrice}</div>
      </div>
      <div>
        <div>Max Price (24H)</div>
        <div>${maxPrice}</div>
      </div>
    </div>
  );
};

export default index;
