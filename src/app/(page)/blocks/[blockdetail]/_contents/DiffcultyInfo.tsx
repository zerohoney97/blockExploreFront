import React from "react";
import { IBlocksDifficultyProps } from "../../interface";
import BlockCardText from "./CardText";

const DiffcultyInfo:React.FC<IBlocksDifficultyProps> = ({feeRecipient,reward,totalDifficulty,size}) => {
  return (
    <div className="w-11/12 border-b border-gray">
      <BlockCardText
      title="Fee Recipient:"
      content={feeRecipient}/>
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
