import React, { useState } from 'react'
import { BlocksListProps, IblocksList } from '../../../_components/blockTable/interface'
import usePagination from "@app/_hooks/usePagination";
import Pagination from "../../../_components/pagination/Pagiation";
import BlocksList from "./Container"

const BlockListWarp: React.FC<BlocksListProps> = ({ blocksList,pageStack =50}) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);
  const { maxPage, page, pageHandler, pageTxList } = usePagination<IblocksList>(
    blocksList,
    pageStack
  );

  const toggleHandler = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className={`mt-10 w-11/12 m-auto rounded-lg shadow-md max-w-[1250px]  h-auto bg-white]`}>
      <div className="overflow-x-auto  h-auto  max-h-[500px]">
        <table className="w-full m-auto">
          <thead>
            <tr className="h-8 border-b border-gray flex ">
              <th className="min-w-[60px] lg:w-20 w-auto flex items-center justify-center font-medium">
                ?
              </th>
              <th className="min-w-[200px]  lg:w-64 flex justify-start items-center font-medium">
                Txn Info
              </th>
              <th className="min-w-[120px] flex items-center font-medium">
                Method
              </th>
              <th className="min-w-[100px] flex items-center  font-medium">
                Block
              </th>
              <th className="min-w-[100px] flex items-center font-medium">
                Age
              </th>
              <th className="min-w-[200px]  lg:w-64 flex items-center font-medium">
                From
              </th>
              <th className="min-w-[200px]  lg:w-64 flex items-center font-medium">
                To
              </th>
   
            </tr>
          </thead>
          <tbody>
            <BlocksList pageTxList={pageTxList} toggleHandler={toggleHandler} />
          </tbody>
        </table>
      </div>
      <Pagination page={page} pageHandler={pageHandler} maxPage={maxPage} />
    </div>
  )
}

export default BlockListWarp