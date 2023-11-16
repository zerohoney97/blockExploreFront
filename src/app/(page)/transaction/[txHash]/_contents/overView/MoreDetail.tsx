import React from "react";
import TxOnMoreDetail from "./OnMoreDetail";
import TxOffMoreDetail from "./OffMoreDetail";
import { IMordeDetailToggleProps } from "@app/(page)/transaction/interface";
const TxMoreDetail: React.FC<IMordeDetailToggleProps> = ({
  mordeDetailToggle,
  moreDetailToggleHandler,
}) => {
  return (
    <div
      className={`${
        mordeDetailToggle ? "sm:h-[520px] lg:h-[410px]" : "h-16 overflow-hidden"
      } transition-all relative`}
    >
      <TxOnMoreDetail
        mordeDetailToggle={mordeDetailToggle}
        moreDetailToggleHandler={moreDetailToggleHandler}
      />
    </div>
  );
};

export default TxMoreDetail;
