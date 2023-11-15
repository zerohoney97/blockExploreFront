import React from "react";
import ItemTableWrap from "@app/_components/itemTable";
import TxOverView from "./OverView";
import TxAction from "./Action";
import TxTransfer from "./Transfer";
import TxTransferToken from "./TransferToken";
import TxTransferNFT from "./TransferNFT";
import TxGasInfo from "./GasInfo";

const TxOverViewMain = () => {
  return (
    <ItemTableWrap>
      <TxOverView />
      <TxAction />
      <TxTransfer />
      <TxTransferToken />
      <TxTransferNFT />
      <TxGasInfo/>
    </ItemTableWrap>
  );
};

export default TxOverViewMain;
