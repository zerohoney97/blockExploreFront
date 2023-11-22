"use client";
import React, { useState } from "react";
import ItemTitle from "@app/_components/itemTitle";
import TabWrap from "./_contents/TabWrap";
import TabButton from "@app/_components/tabComponent/Tab";
import TxOverView from "./_contents/overView/OverView";
import TxOverViewMain from "./_contents/overView";
import TxLogsMain from "./_contents/logs";
import TxStateMain from "./_contents/state";
const Page = () => {
  const [toggleLabelName, setToggleLabelName] = useState<string | null>(
    "Over View"
  );
  const toggleHandler = (label: string) => {
    setToggleLabelName(label);
  };
  const componentHandler = (label: string) => {
    if (label === "Over View") {
      return <TxOverViewMain />;
    } else if (label === "Logs") {
      return <TxLogsMain />;
    } else if (label === "State") {
      return <TxStateMain />;
    } else {
      return <></>;
    }
  };
  return (
    <div className="bg-mainBackGroundColor  max-w-[1250px]">
      <ItemTitle title="Transaction Details" />
      <div className="flex overflow-x-auto flex-nowrap py-3 mt-5  m-auto w-11/12">
        <TabButton
          label="Over View"
          toggleLabelNum={toggleLabelName}
          toggleHandler={toggleHandler}
        />
        <TabButton
          label="Logs"
          toggleLabelNum={toggleLabelName}
          toggleHandler={toggleHandler}
        />
        <TabButton
          label="State"
          toggleLabelNum={toggleLabelName}
          toggleHandler={toggleHandler}
        />
      </div>
      {componentHandler(toggleLabelName as string)}
    </div>
  );
};

export default Page;
