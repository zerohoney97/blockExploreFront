"use client"

import React, { useState } from "react";
import { IBlocksMoreProps } from "../../interface";
import BlockCardText from "./CardText"


const MoreInfo:React.FC<IBlocksMoreProps> = ({hash,parentHash,stateRoot,withdrawsRoot,nonce}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleMoreInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div>
      {showMore && (
        <div className="mb-3 border-b border-gray box-border break-words flex flex-col ">
            <BlockCardText
            title="Hash:"
            content ={hash}/>
            <BlockCardText
            title="Parent Hash:"
            content ={parentHash}/>
            <BlockCardText
            title="StateRoot:"
            content ={stateRoot}/>
            <BlockCardText
            title="WithdrawlsRoot: "
            content ={withdrawsRoot}/>
            <BlockCardText
            title="Nonce:: "
            content ={nonce}/>
        </div>
      )}
      <div className="flex justify-between">
        <div className="font-medium text-sm  ">More Detail:</div>
        <div
          className="text-sm text-text-mainTextColor cursor-pointer"
          onClick={toggleMoreInfo}
        >
          {showMore ? "- Click to show less" : "+ Click to show more"}
        </div>
      </div>
      
      
    </div>
  );
};

export default MoreInfo;
