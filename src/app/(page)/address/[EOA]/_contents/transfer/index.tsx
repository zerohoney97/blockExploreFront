import TxListWrap from "@app/_components/transactionTable";
import {
  ITxListProps,
  ItxList,
} from "@app/_components/transactionTable/interface";
import React from "react";

const AddressTransfer: React.FC<ITxListProps> = ({ txList, lastThName }) => {
  return <TxListWrap txList={txList} lastThName={lastThName} />;
};

export default AddressTransfer;
