"use client"

import React from "react";
import AddressTitle from "./_contents/Title";
import AddressOverView from "./_contents/OverView";
import AddressMoreInfo from "./_contents/MoreInfo";
import AddressTabWrap from "./_contents/TabWrap";
import TabButton from "@app/_components/tabComponent/Tab";
import AddressNftTransfer from "./_contents/NFTTransfer";
import AddressTokenTransfer from "./_contents/tokenTransfer";
import AddressTransfer from "./_contents/transfer";
import { useParams } from "next/navigation"


const Page = () => {
  const router = useParams();
  const { eoa } = useParams();

  return (
    <div className="bg-mainBackGroundColor">
      <AddressTitle
        title="Address"
        eoa={eoa as string}
      />
      <AddressOverView />
      <AddressMoreInfo />
    </div>
  );
};

export default Page;
