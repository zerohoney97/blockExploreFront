import React from "react";

interface InfoProps {
  blockHeight: string;
  status: string;
  timeStamp: string;
  proposedOn: string;
  withdrawals: string;
}

const Info = () => {
  return (
    <div className="w-11/12 border-b border-gray">
      <div className="my-3 flex">
        <div>Block Height: </div>
        <span></span>
      </div>
      <div className="my-3">
        <div>Status</div>
      </div>
      <div className="my-3">
        <div>Propose On</div>
      </div>
      <div className="my-3">
        <div>Transaction</div>
      </div>
      <div className="my-3">
        <div>Withdrawls</div>
      </div>
    </div>
  );
};

export default Info;
