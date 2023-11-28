import React from "react";
import { useParams } from "next/navigation";
interface IAddressTitle {
  title: string;
 
  
  
}
const AddressTitle: React.FC<IAddressTitle> = ({ title}) => {
  const router = useParams();
  console.log("sss",router.EOA)
  return (
    <div className="flex flex-col w-11/12 m-auto flex-wrap justify-between items-start border-b border-gray gap-3 py-5">
      <h1 className="font-semibold text-tablePage-textColor ">{title}</h1>
      <h2 className="text-sm break-all" >{router.EOA}</h2>
    </div>
  );
};

export default AddressTitle;
