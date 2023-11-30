import { ItxList } from "@app/_components/transactionTable/interface";
import { INftTransList } from "@app/(page)/nftTrans/interface";

import { IAddressContent } from "@app/(page)/address/interface";
import { IResponseTransactionData } from "../main/interface";

export type IAddressItem = IAddressContent;

export interface IAddressData {
  ethBalance: string;
  lastTxnSent: string;
  firstTxnSent: string;
  number: string;
  timestamp: string;
  transactionsRoot: string;
  updatedAt: string;
  address: string;
  firstTxnSentTimestamp: string;
  lastTxnSentTimestamp: string;
  txs: IResponseTransactionData[];
}
