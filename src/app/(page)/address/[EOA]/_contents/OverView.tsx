import ItemTableWrap from "@app/_components/itemTable";
import React from "react";
import { IAddressContent, IAddressTableProps } from "../../interface";


const weiToEther = (wei: number): string => {
  const ether = (wei / 10**18).toFixed(5); // Convert to ether with 5 decimal places
  return ether.toString(); // Convert the result to string explicitly
};


const  AddressOverView: React.FC<{ addressOverViewData: IAddressContent }> = ({addressOverViewData }) => {

  const ethBalanceInEther: string = weiToEther(Number(addressOverViewData.ethBalance));
  const firstTx = addressOverViewData.txs[0];
  const firstTxHash = firstTx.hash

  const lastTxIndex = addressOverViewData.txs.length - 1;
  const lastTx = addressOverViewData.txs[lastTxIndex];
  const lastTxHash = lastTx.hash
  return (
    <ItemTableWrap>
      <div className="w-full h-auto flex flex-col  pb-5 ">
        <div className="font-semibold">Overview</div>
        <div className="flex flex-col">
          <div className="lg:flex lg:items-center">
            <div className=" p-2 text-itemDetail-textLabelColor lg:w-[250px] text-sm">
              ETH BALLANCE:
            </div>
            <div className="p-1 h-auto text-sm   w-60 sm:break-words lg:ml-8 md:break-words ">
              <span>{ethBalanceInEther} ETH</span>
            </div>
          </div>
          <div className="lg:flex lg:items-center">
            <div className="p-2 text-itemDetail-textLabelColor lg:w-[250px] text-sm">
              LAST TXN SENT:
            </div>
            <div className="p-1 h-auto text-sm flex  w-80 sm:break-words lg:ml-8 md:break-words">
              <div className="text-blue-500 w-40 truncate">
                {lastTxHash}
              </div>
              <div className="text-itemDetail-textLabelColor">
                {addressOverViewData.lastTxnSentTimestamp}
              </div>
            </div>{" "}
          </div>

          <div className="lg:flex lg:items-center">
            <div className="p-2 text-itemDetail-textLabelColor lg:w-[250px] text-sm">
              FRIST TXN SENT:
            </div>
            <div className="p-1 h-auto text-sm flex  sm:w-80 sm:break-words lg:ml-8  lg:w-96">
              <div className="text-blue-500 w-40 truncate">
                {firstTxHash}
              </div>
              <div className="text-itemDetail-textLabelColor">
                {addressOverViewData.lastTxnSentTimestamp}
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </ItemTableWrap>
  );
};

export default AddressOverView;
