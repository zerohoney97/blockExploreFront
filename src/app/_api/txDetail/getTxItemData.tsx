import {
  IEventLogData,
  ITransactionItemData,
  ITransactionResponseItemData,
} from "./interface";
const divideTimeIntoUnits = (now: number, txTime: number) => {
  const timestampInMilliseconds = txTime * 1000;
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
export const getTxItemData = async (txHash: string) => {
  const now = new Date().getTime();

  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/tx/find/${txHash}`,
      { next: { revalidate: 300 } }
    );

    const resEventLog = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/eventlog/find/${txHash}`,
      { next: { revalidate: 300 } }
    );

    const responseTransactionData: ITransactionResponseItemData =
      await res.json();
    const responseEventLog: IEventLogData[] = await resEventLog.json();
    const {
      Method,
      NFT_id,
      Timestamp,
      accessList,
      block_id,
      blocknumber,
      chainId,
      createdAt,
      from,
      gas,
      gasPrice,
      hash,
      id,
      input,
      maxFeePerGas,
      maxPriorityFeePerGas,
      r,
      s,
      to,
      token_id,
      transactionIndex,
      type,
      updatedAt,
      v,
      value,
    } = responseTransactionData;
    const transactionFee = (Number(gas) * Number(gasPrice)) / 1e18;
    const transactionData: ITransactionItemData = {
      txHash: hash,
      from,
      to,
      transactionFee: transactionFee.toString(),
      gas: weiToGwei(gas),
      gasPrice: weiToGwei(gasPrice),
      maxFeePerGas: weiToGwei(maxFeePerGas),
      maxPriorityFeePerGas: weiToGwei(maxPriorityFeePerGas),
      method: Method,
      status: transactionIndex ? true : false,
      timeStamp: divideTimeIntoUnits(now, Number(Timestamp)),
      value: weiToEth(value),
      block_id: block_id,
      NFT_id: NFT_id,
      token_id: token_id,
      eventLog: responseEventLog,
      input:input
    };

    return transactionData;
  } catch (error) {
    console.log(error);
  }
};

// {
//   id: 2,
//   accessList: [],
//   chainId: '11155111',
//   from: '0x00046e40b355d40a5b3731e9fd584ff4c3446cd6',
//   gas: '10000000',
//   gasPrice: '3114065903',
//   hash: '0x5310cb6fe91d04f22b094560a0e5176a90f245af66e59c6b3db4facd8c58da8b',
//   input: '0xbb1689be0000000000000000000000005b5f63c8f3985cafe1ce53e6374f42ab60de5a6b0000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000536000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000004e200000000000000000000000000000000000000000000000000000000000000180000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000007afff66ce9abda4eb1d11b8f8051a4e599cff9b6a8ba570f24f83b40ed6f469559c97d000000000000000000000000000000000000000000000000000000000000360b000000000000000000000000000000000000000000000000000000000000006ec55a8a7c09f6f5f60f0e6d493777beb0c9ea832a5a52b7d0e977886cf51b16038cc5754050ffbe2ed58e260195e2ac2945404510ee047aa7feeb7519ec3a6e690000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040f47a00000000000000000000000000000000000000000000000000000000000043c0000000000000000000000000000000000000000000000000000000000000454000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000006000000000000000000000000000000000000000000000000000000000007afff7000000000000000000000000000000000000000000000000000000000000360a000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000206d68000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000201e06303cc24fe62aa481679be28a3a34fbebebbbeadf834812bdc2c1ee68ab97000000000000000000000000000000000000000000000000000000000000004a00000000000000000000000000000000000000000000000000000000000009400000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000ac00000000000000000000000000000000000000000000000000000000000000b800000000000000000000000000000000000000000000000000000000000000c400000000000000000000000000000000000000000000000000000000000000d000000000000000000000000000000000000000000000000000000000000000dc00000000000000000000000000000000000000000000000000000000000000e800000000000000000000000000000000000000000000000000000000000000f40000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000010c000000000000000000000000000000000000000000000000000000000000011800000000000000000000000000000000000000000000000000000000000001240000000000000000000000000000000000000000000000000000000000000130000000000000000000000000000000000000000000000000000000000000013c000000000000000000000000000000000000000000000000000000000000014800000000000000000000000000000000000000000000000000000000000001540000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000016c000000000000000000000000000000000000000000000000000000000000017800000000000000000000000000000000000000000000000000000000000001840000000000000000000000000000000000000000000000000000000000000190000000000000000000000000000000000000000000000000000000000000019c00000000000000000000000000000000000000000000000000000000000001a800000000000000000000000000000000000000000000000000000000000001b400000000000000000000000000000000000000000000000000000000000001c000000000000000000000000000000000000000000000000000000000000001cc00000000000000000000000000000000000000000000000000000000000001d800000000000000000000000000000000000000000000000000000000000001e400000000000000000000000000000000000000000000000000000000000001f000000000000000000000000000000000000000000000000000000000000001fc000000000000000000000000000000000000000000000000000000000000020800000000000000000000000000000000000000000000000000000000000002140000000000000000000000000000000000000000000000000000000000000220000000000000000000000000000000000000000000000000000000000000022c000000000000000000000000000000000000000000000000000000000000023800000000000000000000000000000000000000000000000000000000000002440000000000000000000000000000000000000000000000000000000000000250000000000000000000000000000000000000000000000000000000000000025c000000000000000000000000000000000000000000000000000000000000026800000000000000000000000000000000000000000000000000000000000002740000000000000000000000000000000000000000000000000000000000000280000000000000000000000000000000000000000000000000000000000000028c000000000000000000000000000000000000000000000000000000000000029800000000000000000000000000000000000000000000000000000000000002a400000000000000000000000000000000000000000000000000000000000002b000000000000000000000000000000000000000000000000000000000000002bc00000000000000000000000000000000000000000000000000000000000002c800000000000000000000000000000000000000000000000000000000000002d400000000000000000000000000000000000000000000000000000000000002e000000000000000000000000000000000000000000000000000000000000002ec00000000000000000000000000000000000000000000000000000000000002f800000000000000000000000000000000000000000000000000000000000003040000000000000000000000000000000000000000000000000000000000000310000000000000000000000000000000000000000000000000000000000000031c000000000000000000000000000000000000000000000000000000000000032800000000000000000000000000000000000000000000000000000000000003340000000000000000000000000000000000000000000000000000000000000340000000000000000000000000000000000000000000000000000000000000034c000000000000000000000000000000000000000000000000000000000000035800000000000000000000000000000000000000000000000000000000000003640000000000000000000000000000000000000000000000000000000000000370000000000000000000000000000000000000000000000000000000000000037c0000000000000000000000000000000000000000000000000000000000000388000000000000000000000000000000000000000000000000000000000000039400000000000000000000000000000000000000000000000000000000000003a000000000000000000000000000000000000000000000000000000000000003ac00000000000000000000000000000000000000000000000000000000000003b800000000000000000000000000000000000000000000000000000000000003c400000000000000000000000000000000000000000000000000000000000003d000000000000000000000000000000000000000000000000000000000000003dc00000000000000000000000000000000000000000000000000000000000003e800000000000000000000000000000000000000000000000000000000000003f4000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000415f5c2c058c81f7987b4d5bd891f8be74c0edec21770874925b1a3df508c5551d25b9866dca0b969c4286b8ab3878ed2262b6f088a7a5f6514130e0c2f1d513831b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000041b5953730269eaac7b5aa990be746c205a260d70150d4c9e231b9b61ed260f4a63d7d2a073ca0bd07c1c3624bbc6681c95329b856bd662aadc9f4e6eec8f758e21b00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000041316f298e1e2447148e0aa9d5082e391c7348498c8b51b55f89c6a249d3f479a735eb19649d7fab1c7c1f26fc13b639bc0be9f3f790358915f7502f9af08f4ad11c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000300000000000000000000000000000000000000000000000000000000000000410a26547cb40f8b15ba3ef6d68b3266aa94ef69d8b7c35eb3be98d2299c703661563cc794a78a4e2191fb1baa588573ac1b695c403d3c9732bfa852be371a26da1c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000500000000000000000000000000000000000000000000000000000000000000412d6dabfca0ab0874d3411fe978a2682f8a1daf20d7740d211a1bffe55ece5af4137aa57843a5c8ed036f9ceee84dce85f6b272dd38b360b699f49da99566a8cf1c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000060000000000000000000000000000000000000000000000000000000000000041d2bf31400a621736afb5478d39fd862e25a90e84aa56e0242a39efbf05babb237f0318bca761de4e3dcc38c77f9a1ba55844a1e9ac71a3d61a6e7094b54aabd41c00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000070000000000000000000000000000000000000000000000000000000000000041e93625908457fc34a7ed15ca9598db4fc4d5d29bef30de7f06d50b3f24fe29780ba04edd0b67b29c8714d23fcd622746be1593c88d08684bf0db954f7e2a999e1b000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000c0000000000000000000000000000000000000000000000000000000000000041b2051e25834a93816c857dd6b2d8e4abebe4f4e3f9c6bc34f46db63e344689175ffec827b5761aea254c290e99a8b477b8357c3f1f2a05ae7a3549300ac493e01c000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040000000000000000000000000000000000000000000000000000000000000000d00000000000000000000000000000000000000000000000000000000000000413c604b590b15f3dd907d09a067bf04a46b5c92255c2ec9973e60083cfc7f99ab3b4ba1fd2c8f825a2a7f3c5ce9a06422dccfeed8e55c9ba1fe001a9cd5c4d6431b0000'... 32890 more characters,
//   maxFeePerGas: '3235619944',
//   maxPriorityFeePerGas: '3000000000',
//   r: '0x63eb36fc774345728dc878690a925f79c834663b82d4699662047563e20618d6',
//   s: '0x21b73175a153903996fcf5d944062eba137fec80b1da301e585c5fdc76eda9bb',
//   to: '0x577efa5c6184e10d54fda5eb195f7eca30644082',
//   transactionIndex: '2',
//   type: '2',
//   v: '1',
//   value: '0',
//   Method: '0xbb1689be',
//   Timestamp: '1701065760',
//   blocknumber: 4774417,
//   createdAt: '2023-11-27T06:16:09.488Z',
//   updatedAt: '2023-11-27T06:16:09.488Z',
//   NFT_id: null,
//   token_id: null,
//   block_id: 1
// }
