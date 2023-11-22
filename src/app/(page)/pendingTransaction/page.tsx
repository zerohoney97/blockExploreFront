import React from "react";
import PendingTxListWrap from "./_contents";
import useHydration from "@app/_hooks/useHydration";
import { getTransaction } from "@app/_api/main/getTransaction";
import { getBlock } from "@app/_api/main/getBlock";

const Page = async () => {
  const td = await getTransaction();
  return (
    <div>
      <PendingTxListWrap />
    </div>
  );
};

export default Page;
