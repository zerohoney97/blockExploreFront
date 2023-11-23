import React, { useState } from "react";
import { IBlocksMoreProps } from "../../interface";
import BlockCardText from "./CardText";

const MoreInfo: React.FC<IBlocksMoreProps> = ({
  hash,
  parentHash,
  stateRoot,
  withdrawsRoot,
  nonce,
}) => {
  const [showMore, setShowMore] = useState(false);

  const toggleMoreInfo = () => {
    setShowMore(!showMore);
  };

  return (
    <div className="">
      <div
        className={`relative z-0 transition-all duration-500 flex flex-col justify-between ${
          showMore ? "h-0ƒ" : "sm:h-[510px] md:h-[300px] lg:h-[300px]"
        } overflow-hidden`}
      >
        <div
          className={`z-0 relative  box-border break-words flex flex-col ${
            showMore ? "h-0" : "mb-3 border-b border-gray h-auto"
          }`}
        >
          <BlockCardText title="Hash:" content={hash} />
          <BlockCardText title="Parent Hash:" content={parentHash} />
          <BlockCardText title="StateRoot:" content={stateRoot} />
          <BlockCardText title="WithdrawlsRoot: " content={withdrawsRoot} />
          <BlockCardText title="Nonce:: " content={nonce} />
        </div>
      </div>
      <div className="bg-white relative z-5 flex justify-between h-16 overflow-hidden items-center">
        <div className="font-medium text-sm">More Detail:</div>
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
