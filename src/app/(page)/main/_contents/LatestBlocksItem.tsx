import React from "react";
import BlockInfo from "./BlockInfo";
import Miner from "./Miner";
import TransactionsNumber from "./TransactionsNumber";
import MainEthValue from "@app/_components/mainEthValue";
import { IBlocksItemProps } from "../interface";

const LatestBlocksItem: React.FC<IBlocksItemProps> = ({ blocksItem }) => {
  const {
    blockHeight,
    blockTime,
    feeRecipient,
    transactionsInThisBlock,
    transactionsTime,
    blockReward,
  } = blocksItem;
  return (
    <li className="bg-white w-11/12 m-auto border-gray text-sm border-b-[1px] last:border-b-0 py-[15px]">
      <BlockInfo blockHeight={blockHeight} blockTime={blockTime} />
      <Miner feeRecipient={feeRecipient} />
      <TransactionsNumber
        blockHeight={blockHeight}
        transactionsInThisBlock={transactionsInThisBlock}
        transactionsTime={transactionsTime}
      />
      <MainEthValue ethValue={blockReward} />
    </li>
  );
};

export default LatestBlocksItem;
