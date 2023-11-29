import {
  IResponseTransactionData,
  IMainTransactionData,
  IListTransactionData,
} from "./interface";

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
const fromWeiToETH = (wei: string) => {
  return Number(wei) / 10 ** 18;
};

export const getTransaction = async (pageName: string) => {
  console.log(process.env.NODE_ENV);
  const res = await fetch(
    `${
      process.env.NODE_ENV === "development"
        ? "http://localhost:8080"
        : "https://api.bouncexplorer.site"
    }/tx`,
    { cache: "no-cache" }
  );
  try {
    // const temp = await res.json();

    const now = new Date().getTime();
    const responseTransactionData: IResponseTransactionData[] =
      await res.json();

    //   const data = {
    //     id: 1,
    //     accessList: null,
    //     chainId: null,
    //     from: "0x4b9f7003a1b125b9995c145a66b15935a4c92215",
    //     gas: "21000",
    //     gasPrice: "50000000000",
    //     hash: "0xd5cfecfad3b5627347c560c7df52695a80eb3d9b735d32764faed9260f69051c",
    //     input: "0x",
    //     maxFeePerGas: null,
    //     maxPriorityFeePerGas: null,
    //     r: "0x5034706b0a398ec9ca496f52d20f9074d7d3005467727449d4f70205ee1346d8",
    //     s: "0x1ed7518b5b729598cb6a22fa13f5dc22910b84649c0e5bdc05133b8b6b62074e",
    //     to: "0x27bc84873c51b0b6c2612918bf2620e543449aa6",
    //     transactionIndex: "0",
    //     type: "0",
    //     v: "28",
    //     value: "498950000000000000",
    //     Method: "0x",
    //     Timestamp: "1700548800",
    //     createdAt: "2023-11-21T06:40:08.859Z",
    //     updatedAt: "2023-11-21T06:40:08.859Z",
    //      blockNum:123842
    //     NFT_id: null,
    //     token_id: null,
    //     block_id: 1,
    //     eoa_id: null,
    //     CA_id: null,
    //   };
    if (pageName === "main") {
      const transactionData: IMainTransactionData[] =
        responseTransactionData.map((el) => {
          return {
            ethAmount: fromWeiToETH(el.value).toString(),
            fromAddress: el.from,
            toAddress: el.to,
            transactionHash: el.hash,
            transactionTime: divideTimeIntoUnits(now, Number(el.Timestamp)),
          };
        });

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      console.log(transactionData[0]);
      return transactionData.slice(0, 5);
    } else if (pageName === "list") {
      const transactionData: IListTransactionData[] =
        responseTransactionData.map((el) => {
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

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      return transactionData;
    }
  } catch (error) {
    console.log(error);
  }
};
