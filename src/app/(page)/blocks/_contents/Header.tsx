import React from "react";

export const BlockHeader = () => {
  return (
    <thead className="align-middle text-nowrap border-b border-gray text-justify dark:text-white">
      <tr className="text-sm">
        <th className="py-2 min-w-[100px]">Block</th>
        <th className="min-w-[60px]">Age</th>
        <th className="min-w-[150px]">Txn</th>
        <th className="min-w-[250px]">Fee Recipient</th>
        <th className="min-w-[200px]">Gas Used</th>
        <th className="min-w-[200px]">Gas Limit</th>
        <th className="min-w-[200px]">Base Fee</th>
      </tr>
    </thead>
  );
};
