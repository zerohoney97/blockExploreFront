import React, { useState } from "react";
import NftDetailsTitle from "./DetailsTitle";
import NftDetailsList from "./DetailsList";

const NftItemDetails = () => {
  const [listVisible, setListVisible] = useState(true);
  return (
    <div className='w-full'>
      <NftDetailsTitle stateProps={listVisible} stateSetProps={setListVisible} />
      <NftDetailsList stateProps={listVisible} />
    </div>
  );
};

export default NftItemDetails;
