import React from "react";
import TokenCardContent from "../../_contents/CardContent";

interface TokenCardProps {
  title: string;
  contract: string;
}

const index: React.FC<TokenCardProps> = ({ title, contract }) => {
  return (
    <div className=" flex flex-col gap-5 text-sm break-words">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div>TOKEN CONTRACT (WITH 6 DECIMALS)</div>
      <div>{contract}</div>
    </div>
  );
};

export default index;
