import React from "react";
import AddressTitle from "./_contents/Title";
import AddressOverView from "./_contents/OverView";
import AddressMoreInfo from "./_contents/MoreInfo";
import AddressTabWrap from "./_contents/TabWrap";

const Page = () => {
  return (
    <div>
      <AddressTitle
        title="Address"
        address="0x787E943f27D78168ebF2D1E00B66b8895Ca45B6F"
      />
      <AddressOverView />
      <AddressMoreInfo />
      <AddressTabWrap />
    </div>
  );
};

export default Page;
