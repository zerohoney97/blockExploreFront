import React from "react";
import { INftDetailsListProps } from "../../interface";
import NftDetailsItemLink from "./DetailsItemLink";
import NftDetailsItem from "./DetailsItem";

const NftDetailsList: React.FC<INftDetailsListProps> = ({ stateProps }) => {
  return (
    <div
      className={`overflow-hidden transition-all duration-500 ease-in-out ${
        stateProps ? "max-h-[1000px]" : "max-h-0"
      } `}>
      <ul className='w-11/12 m-auto py-5'>
        <NftDetailsItemLink name="Owner" address="0xC67DB0dF922238979DA0fD00D46016E8Ae14ceCb"  />
        <NftDetailsItemLink name="Contract Address" address="0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D" />
        <NftDetailsItemLink name="Creator" address="Bored Ape Yacht Club: Deployer" />

        <NftDetailsItem name = "Classification" address = "off-Chain (IPFS)" />
        <NftDetailsItem name = "Token ID" address = "9466" />
        <NftDetailsItem name = "Token Standard" address = "ERC-721" />

      </ul>
    </div>
  );
};

export default NftDetailsList;
