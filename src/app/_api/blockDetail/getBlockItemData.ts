import { IResponseDataSequlErr } from "../interface";
import { fromWeiToETH } from "../main/getTxMethod/utils/fromWeiToETH";
import { isResponseDataSequlErr } from "../utils";
import { IBlockItemData, IResponseBLockItemData } from "./interface";

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

const weiToGwei = (gas: string) => {
  return (Number(gas) / 1e9).toString();
};
const weiToEth = (wei: string) => {
  const eth = Number(wei) / 1e18; // 1 Ether = 10^18 Wei
  return eth.toFixed(18); // Format the result with 18 decimal places (optional)
};
export const getBlockItemData = async (blockNum: string) => {
  const now = new Date().getTime();

  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/block/find/${blockNum}`,
      { cache: "no-cache" }
    );
    const now = new Date().getTime();

    const responseBlockData: IResponseBLockItemData | IResponseDataSequlErr =
      await res.json();
    if (isResponseDataSequlErr(responseBlockData)) {
      return null;
    }
    if (responseBlockData === null) {
      throw new Error("Data is null");
    }
    const {
      baseFeePerGas,
      createdAt,
      difficulty,
      extraData,
      gasLimit,
      gasUsed,
      hash,
      id,
      logsBloom,
      miner,
      mixHash,
      nonce,
      number,
      parentHash,
      receiptsRoot,
      sha3Uncles,
      stateRoot,
      timestamp,
      transactionsRoot,
      txcount,
      updatedAt,
      withdrawalsRoot,
      txs,
    } = responseBlockData;
    const blockData: IBlockItemData = {
      blockNumber: number,
      timeStamp: divideTimeIntoUnits(now, Number(timestamp)),
      baseFeePerGas: weiToEth(baseFeePerGas),
      difficulty: difficulty,
      extraData: extraData,
      feeRecipient: miner,
      gas: gasUsed,
      gasLimit,
      hash,
      nonce,
      parentHash,
      stateRoot,
      status: createdAt ? true : false,
      txCount: txcount,
      withdrawalsRoot,
    };
    blockData.txs = responseBlockData.txs.map((el, index) => {
      return {
        value: fromWeiToETH(el.value).toString(),
        from: el.from,
        to: el.to,
        txHash: el.hash,
        age: divideTimeIntoUnits(now, Number(el.Timestamp)),
        blocknumber: el.blocknumber.toString(),
        method: el.Method,
      };
    });
    return blockData;
  } catch (error) {
    console.log(error);
  }
};
