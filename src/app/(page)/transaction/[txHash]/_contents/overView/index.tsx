"use client";
import React, { useState } from "react";
import ItemTableWrap from "../itemWrap";
import TxOverView from "./OverView";
import TxAction from "./Action";
import TxTransfer from "./Transfer";
import TxTransferToken from "./TransferToken";
import TxTransferNFT from "./TransferNFT";
import TxGasInfo from "./GasInfo";
import TxMoreDetail from "./MoreDetail";

const TxOverViewMain = () => {
  const [mordeDetailToggle, setMoreDetailToggle] = useState<boolean>(false);
  const moreDetailToggleHandler = () => {
    setMoreDetailToggle(!mordeDetailToggle);
  };
  return (
    <>
      {" "}
      <ItemTableWrap>
        <TxOverView />
        <TxAction />
        <TxTransfer />
        <TxTransferToken />
        <TxTransferNFT />
        <TxGasInfo />
      </ItemTableWrap>
      <ItemTableWrap>
        <TxMoreDetail
          mordeDetailToggle={mordeDetailToggle}
          moreDetailToggleHandler={moreDetailToggleHandler}
        />
      </ItemTableWrap>
    </>
  );
};

export default TxOverViewMain;
