import React from "react";

interface TokenCardProps {
  title: string;
  MaxTotalSupply: string;
  holders: string;
  totaltransfers: string;
}

const index: React.FC<TokenCardProps> = ({
  title,
  MaxTotalSupply,
  holders,
  totaltransfers,
}) => {
  return (
    <div className=" flex flex-col gap-5 text-sm">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div>
        <div>MAX TOTAL SUPPLY</div>
        <div>{MaxTotalSupply}USDT</div>
      </div>
      <div>
        <div>HOLDERS</div>
        <div>{holders}</div>
      </div>
      <div>
        <div>TOTAL TRANSFERS</div>
        <div>{totaltransfers}</div>
      </div>
      
    </div>
  );
};

export default index;
