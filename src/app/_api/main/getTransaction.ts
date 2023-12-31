import { IResponseDataSequlErr } from "../interface";
import { isResponseDataSequlErr } from "../utils";
import { getAllTx } from "./getTxMethod/getAllTx";
import { getMainTx } from "./getTxMethod/getMainTx";
import { getNFTTransferTx } from "./getTxMethod/getNFTTransferTx";
import { getTokenTransferTx } from "./getTxMethod/getTokenTransferTx";
import {
  IResponseTransactionData,
  IMainTransactionData,
  IListTransactionData,
} from "./interface";

export const getTransaction = async (pageName: string) => {
  try {
    const res = await fetch(
      `${
        process.env.NODE_ENV === "development"
          ? "http://localhost:8080"
          : "https://api.bouncexplorer.site"
      }/tx`,
      { cache: "no-cache" }
    );
    const responseTransactionData:
      | IResponseTransactionData[]
      | IResponseDataSequlErr = await res.json();
    if (isResponseDataSequlErr(responseTransactionData)) {
      console.log(responseTransactionData ,'메인 데이터 문제')
      return null;
    }

   

    if (pageName === "main") {
      return getMainTx(responseTransactionData);
    } else if (pageName === "list") {
      return getAllTx(responseTransactionData);
    } else if (pageName === "NFT") {
      return await getNFTTransferTx(responseTransactionData);
    } else if (pageName === "token") {
      return await getTokenTransferTx(responseTransactionData);
    } else {
      console.log(pageName)
      return null;
    }
  } catch (error) {
    console.log(error);
    return 'data exceed'
  }
};
