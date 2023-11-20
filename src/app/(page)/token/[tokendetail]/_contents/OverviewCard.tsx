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
    <div className=" flex flex-col gap-5 ">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div>
        <div className="text-xs">MAX TOTAL SUPPLY</div>
        <div className="text-xs">{MaxTotalSupply}USDT</div>
      </div>
      <div>
        <div className="text-xs">HOLDERS</div>
        <div className="text-xs">{holders}</div>
      </div>
      <div>
        <div className="text-xs">TOTAL TRANSFERS</div>
        <div className="text-xs">{totaltransfers}</div>
      </div>
      
    </div>
  );
};

export default index;
