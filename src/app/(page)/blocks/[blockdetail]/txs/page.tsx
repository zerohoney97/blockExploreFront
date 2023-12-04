import React from "react";
import TxListWrap from "@app/_components/transactionTable";
import { IblockstxnList } from "./interface";
import useHydration from "@app/_hooks/useHydration";
import TxnTitle from "./_content/Title";
import Error from "@app/_components/error";
import { IBlockDetailData, IBlocksDetailProps } from "../../interface";
import { getBlockItemData } from "@app/_api/blockDetail/getBlockItemData";

const Page: React.FC<IBlocksDetailProps> = async ({ params }) => {
  const blockData: IBlockDetailData = (await getBlockItemData(
    params.blockdetail
  )) as IBlockDetailData;
  if (!blockData) {
    return <Error />;
  }
  return (
    <div>
      <div>
        <TxnTitle title="Transactions"></TxnTitle>
      </div>
      <TxListWrap txList={blockData.txs} lastName="Value" pageStack={50} />
    </div>
  );
};

export default Page;
