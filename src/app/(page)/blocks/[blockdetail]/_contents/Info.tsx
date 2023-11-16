import React from "react";
import { IBlocksDetailProps } from "../../interface";
import BlockCardText from "./CardText";

const Info: React.FC<IBlocksDetailProps> = (
  { blockHeight, 
    status,
    timeStamp,
    proposedOn,
    transaction,
    withdrawals
  }) => {
  return (
    <div className="w-11/12 border-b border-gray">
      <BlockCardText
      title="Block Height:"
      content={blockHeight}
      />
      <BlockCardText
      title="Status:"
      content={status}
      />
      <BlockCardText
      title="Timestamp:"
      content={timeStamp}
      />
      <BlockCardText
      title="Propose On:"
      content={blockHeight}
      />
      <BlockCardText
      title="Block Height:"
      content={proposedOn}
      />
      <BlockCardText
      title="Transaction:"
      content={transaction}
      />
     
      <BlockCardText
      title="Withdrawls:"
      content={withdrawals}
      />
    </div>
  );
};

export default Info;
