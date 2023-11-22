"use client";
import React, { useState } from "react";
import PcDropDownMenu from "./PcDropDownMenu";
import {
  IDropDownMenuData,
  IDropDownMenuDataObj,
  IDropMenuProps,
  IPcDropMenu,
} from "../interface";
import Link from "next/link";

const PcHeader: React.FC<IDropMenuProps> = ({ router }) => {
  const [openMenuName, setOpenMenuName] = useState<string>("");
  const dropDownMenu: IDropDownMenuDataObj = {
    blockchain: [
      { name: "Transactions", href: "transaction" },
      { name: "Pending Transactions", href: "pendingTransaction" },
      { name: "View Blocks", href: "blocks" },
    ],
    token: [
      { name: "Top Tokens", href: "token" },
      { name: "Token Transfers", href: "token/trnasfer" },
    ],
    NFT: [
      { name: "Top NFTs", href: "nft" },
      { name: "NFT Transfers", href: "nft" },
    ],
  };

  const openMenuNameHandler = (name: string) => {
    if (openMenuName === name) {
      setOpenMenuName("");
    } else {
      setOpenMenuName(name);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-[1400px] m-auto min-h-[60px] p-8 h-fit relative">
        <div className="min-h-[60px] h-full flex justify-between items-center relative z-10  m-auto">
          <Link href={"http://localhost:3000/"}>
            <div className="w-52 h-10 flex justify-around items-center">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAEMUlEQVR4Ae2WA5DkWhSGszbGSjpp2/batm3btm3vs23btm379fC8v1IvO1Zmy3OrvkH3yfmPcu9l6lf9qstq2rhxS4NO18eo148TFAo1PmrctnVrVuC4dLVS2aCkrZLnm4MWl0UYjhqnJCWld+3cecfJEycSPXv0IC4n541oOHxq6pQpH+m12tcQUJ//bRsCo6DgNTzHu4lyGtHnbAO5wklgDLie57i3d+/alfjpp5+of79+lJWRQZMnTaK7776btGo1IYCHVYLQisGCuKBW8uOuOcSdLvqUvZM+YwfKEbeDe0EeEEXugVgikaATJ06Qz+ulMaNH09tvv01TJk8mi8n0NVoxF7YjkPnwoIff/uET7K/0JUv5n7APPXwN16o24hbwCqCSXLxwgfLz8+mvv/6iV199lWbOmEEvvvAC3XfvveRHQKgCwa4QFGmUPO1fr0j88Tb7xdUHuftUAj9U4PloTcTbgtvLiqMF1KdXL3r6qafos88+oxPHj5PJYCCfx0NOu120KYtOzT+xZ43CqNfwU9GWCD7LqkkA46Wyl0HM0AGxWCRCOo1G/F+iInuwrERSnUDr6sTbgEcAVQbExGrg7+p4EyhL+G4EGlQXQAz8AaiO/ABkTf4aQHXkPTAINKiteFNwp0zRIkz4h2jPDqBh5Cy9RqOGo49kiGPa1X/4HI7NHQIBV5dwOAm/G9ZIFIatQKRjMLgJDp7GTpZfW3EB2E2moo6BQD58/QJeBafAUJBZmXAz0A/cA34H5LZaZfVcAFajkeCjLHngdbAUZJQUTwH7wV+AJKwGg+hMZgvI73BQBJtS3O8vG0gheBy4pABOgAJAcRDCQy5kr1Wp6jT9aB9p4MOo1ZLDbKaA00mx0sE8AxSMlHnA5SILssY5Lm0wssXLblKSLwOC8dhsUiB5YDwT8/m+closBGHREPu5GLkVUSML0UEthUVfQPQVi0ZFX163+1IgJr2ewh7PnxjU/ozNaJwMoW/xJQV8PpozezbhUkHbtm6lPr170yyccDh6a5W1HS3ct3cvjR41ik6dOkWzZ86kdWvXksvhkILIRzWOdg6HWzNsTk5DfNCRzc5+YgouFAvmz6ebb7qJZuGhxx59lBYvXFjbdoj2a1evpvvvv198/uyZM7R2zRrx9FSw7CewmQ+b0gdRanKyb8SwYT9PmzqVzp87J1bi3nvuIbPRKCcAseR33nGHWEHcnGj6tGkUCYVez87MtFa4LacmJbVAr64KYkAmT5xIo0aMELOAsx/xwE8gF1ANKAB/4F74D7KnXj17UreuXQtsFssvmIsJTFULF0sOJVqIs/1B3HS/xuUiD84WAgvoBSaBZWAz2AP2g31gO1gNZoEhwA+x3biWfYX5egBJrIRvP3w3ZWqyMA9JMDaAYXCWwchYEG0PUT18tGCzsio9C+pX/foPmawbnhEQly8AAAAASUVORK5CYII="
                alt="바운스코드 이미지"
                className="ml-2"
              />
              <div className="text-xl">Bounce Code</div>
            </div>
          </Link>
          <div className="w-3/6 h-full">
            <ul className="flex justify-center items-center">
              <li
                className="cursor-pointer  flex flex-col justify-start items-start ml-5 mr-5"
                onClick={() => {
                  router.push("/main");
                }}
              >
                Home{" "}
              </li>
              <PcDropDownMenu
                label="Blockchain"
                dropDownMenuArr={dropDownMenu["blockchain"]}
                openMenuName={openMenuName}
                openMenuNameHandler={openMenuNameHandler}
              />
              <PcDropDownMenu
                label="Tokens"
                dropDownMenuArr={dropDownMenu["token"]}
                openMenuName={openMenuName}
                openMenuNameHandler={openMenuNameHandler}
              />
              <PcDropDownMenu
                label="NFTs"
                dropDownMenuArr={dropDownMenu["NFT"]}
                openMenuName={openMenuName}
                openMenuNameHandler={openMenuNameHandler}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PcHeader;
