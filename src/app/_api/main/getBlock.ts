import { IBlocksItem, IResponseBlockData } from "./interface";

const divideTimeIntoUnits = (now: number, blockTime: number) => {
  const timestampInMilliseconds = blockTime * 1000;

  const difference = now - timestampInMilliseconds;
  if (Math.floor(difference / 3600000) > 1) {
    return `${Math.floor(difference / 3600000)} hours ago`;
  } else if (Math.floor(difference / 60000) > 1) {
    return `${Math.floor(difference / 60000)} minutes ago`;
  } else {
    return `${Math.floor(difference / 1000)} seconds ago`;
  }
};

export const getBlock = async () => {
  const res = await fetch("https://api.bouncexplorer.site/block");
  const now = new Date().getTime();
  const responseBlockData: IResponseBlockData[] = await res.json();
  const blockData: IBlocksItem[] = responseBlockData.map((el) => {
    return {
      blockHeight: el.number,
      blockTime: divideTimeIntoUnits(now, Number(el.timestamp)),
      feeRecipient: el.miner,
      transactionsInThisBlock: "없음",
      transactionsTime: "없음 ago",
    };
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return blockData;
};
