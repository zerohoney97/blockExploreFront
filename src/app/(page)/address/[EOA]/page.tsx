"use client"

import React from "react";
import AddressTitle from "./_contents/Title";
import AddressOverView from "./_contents/OverView";
import AddressMoreInfo from "./_contents/MoreInfo";
;



const Page = () => {
  return (
    <div className="bg-mainBackGroundColor">
      <AddressTitle
        title="Address"
      />
      <AddressOverView />
      <AddressMoreInfo />
    </div>
  );
};

export default Page;
