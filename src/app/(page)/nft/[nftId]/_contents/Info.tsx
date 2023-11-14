import React from "react";
import ItemTableWrap from "@app/_components/itemTable";

const NFTInfo = () => {
  return (
    <ItemTableWrap>
      <h1 className=" font-bold text-lg">OverView</h1>
      <p className="mt-5 overflow-y-scroll">
        [Note - Citizens with Reward Rates of 1 do not have Vaults. A Vault can
        be attached to increase Yield for BYTES 2.0 Staking. Citizens with
        Reward Rates of 2 or above have Vaults.] Upload complete. Wake up,
        Citizen. The road ahead is long, so strap in. A new world awaits us. Neo
        Tokyo is a collection of VCs, developers, token founders, and highly
        proficient builders all gathered in one exclusive area of web3. Our
        calling at Neo Tokyo is to prepare and be well positioned at the
        forefront of the metaverse revolution, once it inevitably arrives.
        https://neotokyo.codes
      </p>
    </ItemTableWrap>
  );
};

export default NFTInfo;
