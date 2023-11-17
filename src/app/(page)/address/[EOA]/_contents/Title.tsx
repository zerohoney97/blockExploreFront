import React from "react";
interface IAddressTitle {
  title: string;
  address: string;
}
const AddressTitle: React.FC<IAddressTitle> = ({ title, address }) => {
  return (
    <div className="flex flex-col w-11/12 m-auto flex-wrap justify-between items-start border-b border-gray gap-3 py-5">
      <h1 className="font-semibold text-tablePage-textColor ">{title}</h1>
      <h2 className="text-sm break-all" >{address}</h2>
    </div>
  );
};

export default AddressTitle;
