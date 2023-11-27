"use client";
import TabButton from "@app/_components/tabComponent/Tab";
import React, { useState } from "react";
import TxOverViewMain from "./overView";
import TxLogsMain from "./logs";
import TxStateMain from "./state";

const TxTabButtonWrap = () => {
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
    <>
      {" "}
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
    </>
  );
};

export default TxTabButtonWrap;
