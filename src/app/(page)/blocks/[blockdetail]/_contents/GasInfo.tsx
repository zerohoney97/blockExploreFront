import React from "react";
import { IBlocksGasProps } from "../../interface";
import BlockCardText from "./CardText";


const GasInfo: React.FC<IBlocksGasProps> = ({
  gasUsed,
  gasUsedPercent,
  gasLimit,
  baseFeePerGas,
  burntFee,
  extraData,
}) => {
  return (
    <div className=" border-gray">
        <BlockCardText title="Gas Used:" content={gasUsed}>
          {gasUsedPercent && (
            <span className="text-xs">({gasUsedPercent}%)</span>
          )}
        </BlockCardText>
      <BlockCardText title="Gas Limit:" content={gasLimit} />
      <BlockCardText title="Base Fee Per Gas:" content={baseFeePerGas} />
      <BlockCardText title="Burnt Fee:" content={burntFee} />
      <BlockCardText title="Extra Data:" content={extraData} />
    </div>
  );
};

export default GasInfo;
