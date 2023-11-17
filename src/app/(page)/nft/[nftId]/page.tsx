import React from "react";
import ItemTitle from "@app/_components/itemTitle";
import { INftTxDetailProps } from "../interface";
import OverViewInfo from "./_contents/OverViewInfo";
import MarketInfo from "./_contents/MarketInfo";
import OtherInfo from "./_contents/OtherInfo";
import NftDetailTableWrap from "./_contents/DetailTableWrap";
import useHydration from "@app/_hooks/useHydration";
import NftDetailContainer from "./_contents/DetailContainer";
import NFTDetailHeaderContainer from "./_contents/DetailHeaderContainer";
import NFTDetailHeader from "./_contents/DetailHeader";
import NFTDetailFooterContainer from "./_contents/DetailFooterContainer";
import NFTDetailMoreInfo from "./_contents/DetailMoreInfo";

const NftTxDetail: React.FC<INftTxDetailProps> = ({ params }) => {
  return (
    <>
      {" "}
      <div className="bg-mainBackGroundColor ">
        <ItemTitle title={params.nftId} />
        <div className="w-20 h-8 m-6 border-2 border-white bg-white rounded-xl font-bold flex justify-center items-center text-sm">
          ERC-721
        </div>
        <NftDetailContainer>
          <NFTDetailHeaderContainer>
            <NFTDetailHeader>
              <NftDetailTableWrap>
                <OverViewInfo />
              </NftDetailTableWrap>
            </NFTDetailHeader>
            <NFTDetailHeader>
              <NftDetailTableWrap>
                <MarketInfo />
              </NftDetailTableWrap>
            </NFTDetailHeader>
          </NFTDetailHeaderContainer>
          <NFTDetailFooterContainer>
            <NftDetailTableWrap>
              <OtherInfo />
            </NftDetailTableWrap>
          </NFTDetailFooterContainer>
        </NftDetailContainer>

        <NFTDetailMoreInfo />
      </div>
    </>
  );
};

export default NftTxDetail;
