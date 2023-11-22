import React from "react";
import Link from "next/link";


interface TokenCardProps {
  title: string;
  contract: string;
}

const index: React.FC<TokenCardProps> = ({ title, contract }) => {
  return (
    <div className=" flex flex-col gap-5 text-sm">
      <div>
        <h3 className="text-base font-semibold mb-0">{title}</h3>
      </div>
      <div>TOKEN CONTRACT</div>
      <Link href={"/"}>
      <div className="text-text-mainTextColor">{contract}</div>
      </Link>
    </div>
  );
};

export default index;

