import { ItxList } from "@app/_components/transactionTable/interface";
import { INftTransList } from "../nftTrans/interface";
import { ITransactionDetailData } from "../transaction/interface";
import { IAddressData } from "@app/_api/address/interface";


interface IAddressTitle {
    title: string;
}

interface IAddressContent{
    ethBalance : string;
    lastTxnSent :string;
    lastTxnSentTimestamp :string;
    firstTxnSent:string;
    firstTxnSentTimestamp:string;

}

export interface IAddressTableProps{
    addressData:IAddressContent[]
  }
  

export type IAddresstxList = ItxList
  
  export type INFTTxList = INftTransList

  export type IAddressDetailData=IAddressData
  