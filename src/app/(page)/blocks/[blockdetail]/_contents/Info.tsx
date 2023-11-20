"use client"

import React, { useEffect, useState } from "react";
import { BlocksInfoProps } from "../../interface";
import BlockCardText from "./CardText";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Info: React.FC<BlocksInfoProps> = ({
  blockHeight,
  status,
  timeStamp,
  slot,
  epoch,
  transaction,
  withdrawals,
}) => {
  // const BlockNumber = blockHeight
  // console.log(BlockNumber)

  const [BlockNumber, setBlockNumber] = useState(parseInt(blockHeight, 10));
  const router = useRouter();

  
  const increment = () => {
    const newBlockNumber = BlockNumber + 1;
    setBlockNumber(newBlockNumber);
    router.push(`/blocks/${newBlockNumber}`);
  };

  const decrement = () => {
    const newBlockNumber = BlockNumber - 1;
    setBlockNumber(newBlockNumber);
    router.push(`/blocks/${newBlockNumber}`);
  };


  return (
    <div className="border-b border-gray">
      <BlockCardText title="Block Height:" content={
        <>
        {BlockNumber}
        <span className="">
          <button onClick={decrement} className="bg-gray w-auto px-1 text-base rounded ml-1">{"<"}</button>
          <button onClick={increment} className="bg-gray  w-auto px-1 text-base rounded ml-1 ">{">"}</button>
        </span>
        </>
        }>


      </BlockCardText>
      <BlockCardText title="Status:" content={status}>
        {/* <span className="border-2 rounded p-1 bg-gray border-black/10 font-bold">
          Unfinalized
        </span> */}
        <span className="border-2 rounded p-1 bg-green-300/40 border-green-500/30 text-green-800 font-bold">
          Finalized
        </span>
      </BlockCardText>
      <BlockCardText title="Timestamp:" content={timeStamp} />
      <BlockCardText
        title="Propose On:"
        content={"Block proposed on slot" + "'" + slot + "'"}
        content2={",epoch" + "'" + epoch + "'"}
      />
      <BlockCardText
        title="Transaction:"
        content={
          <>
            <Link
              className="text-blue-500"
              href={`/transaction/${BlockNumber}`}
            >
              {transaction} transaction
            </Link>
            <span> in this block</span>
 
          </>
        }
      ></BlockCardText>

      <BlockCardText
        title="Withdrawals:"
        content={
          <>
            <Link
              className="text-blue-500"
              href="http://localhost:3000/blocks/18545455"
            >
              {withdrawals} withdrawals
            </Link>
            <span> in this block</span>
          </>
        }
      ></BlockCardText>
    </div>
  );
};

export default Info;
