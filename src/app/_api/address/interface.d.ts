import { ItxList } from "@app/_components/transactionTable/interface";
import { INftTransList } from "@app/(page)/nftTrans/interface";

import { IAddressContent } from "@app/(page)/address/interface";

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
  txs: ItxList[];
  firstTxnSentTimestamp:string;
  lastTxnSentTimestamp:string

}