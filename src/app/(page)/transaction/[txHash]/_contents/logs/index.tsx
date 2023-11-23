import React from "react";
import LogContentWrap from "./ContentWrap";
import ItemTableWrap from "@app/_components/itemTable";

const TxLogsMain = () => {
  return (
    <ItemTableWrap>
      <LogContentWrap />
      <LogContentWrap />
      <LogContentWrap />
      <LogContentWrap />
    </ItemTableWrap>
  );
};

export default TxLogsMain;
