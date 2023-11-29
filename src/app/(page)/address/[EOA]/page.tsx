
import React from "react";
import AddressTitle from "./_contents/Title";
import AddressOverView from "./_contents/OverView";
import AddressMoreInfo from "./_contents/MoreInfo";
import { getAddress } from "@app/_api/address/getAddress";
import { IAddressContent, IAddressDetailData } from "../interface";

const Page = async({params}:{params:{EOA:string}}) => {
  //값1 obj interface 는 너가 만든 address interface 정의를 해주세요
  //값2 해당 유저가 존재하는 모든 tx리스트 interface 는 IAddresstxList[]

  const addressData:IAddressDetailData = await getAddress(params.EOA) as IAddressDetailData
  
  const addressOverViewData:IAddressContent={
    ethBalance:addressData.ethBalance,
    firstTxnSentTimestamp:addressData.firstTxnSentTimestamp,
    lastTxnSentTimestamp:addressData.lastTxnSentTimestamp,
    txs:addressData.txs
  }
  
  return (
    <div className="bg-mainBackGroundColor dark:bg-black/90">
      <AddressTitle
        title="Address"
      />
      <AddressOverView addressOverViewData={addressOverViewData}/>
      {/* <AddressOverView
          ethBalance="0.002575841931814377"
          lastTxnSent="0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738"
          lastTxnSentTimestamp="from 16 secs ago"
          firstTxnSent="0xdc1b18f4fba9b80868268645a2c449e5f7e556c4d2b0335204d12c4496720738"
          firstTxnSentTimestamp ="from 1472 days 18 hrs ago"/> */}
      <AddressMoreInfo />
    </div>
  );
};

export default Page;
