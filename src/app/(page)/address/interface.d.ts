import { ItxList } from "@app/_components/transactionTable/interface";
import { INftTransList } from "../nftTrans/interface";
import { ITransactionDetailData } from "../transaction/interface";
import { IAddressData } from "@app/_api/address/interface";
import { IResponseTransactionData } from "@app/_api/main/interface";


interface IAddressTitle {
    title: string;
}

interface IAddressContent{
    ethBalance : string;
    lastTxnSentTimestamp :string;
    firstTxnSentTimestamp:string;
    txs:IAddressTransactionDataList
    // firstTx:string
    // lastTx:string
}
export interface IAddressTxHash{
    hash: string;
}

export interface IAddressTableProps{
    addressData:IAddressContent[]
  }
  

export type IAddresstxList = ItxList
  
  export type INFTTxList = INftTransList

  export type IAddressDetailData=IAddressData

  export type IAddressTransactionDataList=IResponseTransactionData[]
  