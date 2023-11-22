import React from "react";
import { IBlocksDifficultyProps } from "../../interface";
import BlockCardText from "./CardText";
import Link from "next/link";

const DiffcultyInfo:React.FC<IBlocksDifficultyProps> = ({feeRecipient,reward,totalDifficulty,size}) => {
  return (
    <div className="border-b border-t border-gray">
      <BlockCardText
      title="Fee Recipient:"
      content={
        <>
          <Link
            className="text-text-mainTextColor"
            href="http://localhost:3000/address/"
          >
           Fee Recipient {feeRecipient}
          </Link>
          <span> in sec</span>
        </>
      }/>
      <BlockCardText
      title="Block Reward:"
      content={reward}/>
      <BlockCardText
      title="Total Difficulty:"
      content={totalDifficulty}/>
      <BlockCardText
      title="Size:"
      content={size}/>
    </div>
  );
};

export default DiffcultyInfo;
