import { ITransactionItemData } from "@app/_api/txDetail/interface";
import { IListTransactionData, IResponseTransactionData } from "../interface";
import { fromWeiToETH } from "./utils/fromWeiToETH";
import { divideTimeIntoUnits } from "./utils/divideTimeIntoUnits";

export const getTokenTransferTx = (
  responseTransactionData: IResponseTransactionData[]
) => {
  const filteredTransactionData: IResponseTransactionData[] =
    responseTransactionData.filter((el) => {
      return el.token_id !== null;
    });
  const transactionData: IListTransactionData[] = filteredTransactionData.map(
    (el) => {
      return {
        value: fromWeiToETH(el.value).toString(),
        from: el.from,
        to: el.to,
        txHash: el.hash,
        age: divideTimeIntoUnits(Number(el.Timestamp)),
        blocknumber: el.blocknumber.toString(),
        method: el.Method,
      };
    }
  );
  return transactionData;
};
