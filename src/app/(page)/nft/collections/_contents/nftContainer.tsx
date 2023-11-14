"use client";
import React from "react";
import NftTitle from "./nftTitle";
import NftTable from "./nftTable";
import TabButton from "@app/_components/tabComponent/Tab";

const NFTContainer = () => {
  return (
    <div className="w-full h-screen bg-gray-100 p-10">
      <NftTitle />
      <div className="w-full h-32 flex justify-end items-end">
        <TabButton
          isActive={false}
          onChange={() => {
            console.log("asd");
          }}
          label="6h"
        />
        <TabButton
          isActive={false}
          onChange={() => {
            console.log("asd");
          }}
          label="6h"
        />
        <TabButton
          isActive={false}
          onChange={() => {
            console.log("asd");
          }}
          label="6h"
        />
      </div>

      <NftTable />
    </div>
  );
};

export default NFTContainer;
