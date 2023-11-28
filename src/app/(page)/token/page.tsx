import React, { useEffect, useState } from "react";
import Title from "@app/_components/itemTitle";
import ItemTable from "./_contents/ItemTable";

import searchIcon from "../../../../public/search03.png";
import Image from "next/image";
import TokenTable from "./_contents/Table";
import { getToken } from "@app/_api/token/getToken";
import { ITokenDetail, TokenDataProps } from "./Interface";

const Page = async () => {
  const tokenListData: TokenDataProps[] = (await getToken()) as TokenDataProps[];
  return (
    <>
      <div className="box-border flex flex-col p-3 bg-mainBackGroundColor items-center dark:bg-black/90">
        <div className="w-full">
          <Title title="Token Tracker(ERC-20)" />
          <ItemTable>
            <div className="text-sm m-4 flex justify-between items-center dark:text-white">
              A total of {""} Token Contracts found{" "}
              <Image
                className="flex cursor-pointer m-3"
                src={searchIcon}
                alt="searchIcon"
                width={25}
              />
            </div>
            <TokenTable tokenListData={tokenListData} />
          </ItemTable>
        </div>
      </div>
    </>
  );
};

export default Page;
