import ItemTitle from "@app/_components/itemTitle";
import TxContentWrap from "./_contents/ContentWrap";
import { getTxItemData } from "@app/_api/txDetail/getTxItemData";
import { ITransactionDetailData } from "../interface";
const Page = async ({ params }: { params: { txHash: string } }) => {
  const transactionItemData: ITransactionDetailData = (await getTxItemData(
    params.txHash
  )) as ITransactionDetailData;
  if (transactionItemData === undefined) {
    return <div>오류발생</div>;
  }
  return (
    <div className="bg-mainBackGroundColor pb-5  max-w-[1250px] m-auto dark:bg-black/90">
      <ItemTitle title="Transaction Details" />
      <TxContentWrap transactionItemData={transactionItemData} />
    </div>
  );
};

export default Page;
