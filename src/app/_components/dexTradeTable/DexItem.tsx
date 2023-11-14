import React from 'react'
import { DexItemProps } from './interface';

const DexItem: React.FC<DexItemProps> = ({ DexItem, toggleHandler }) => {
    return (
        <tr className="h-14 border-b border-gray">
          <td className="w-[5%] flex items-center justify-center p-2 relative">
            <div className="relative">
              <img
                src="https://i.pinimg.com/originals/ce/9c/4e/ce9c4e4f06e724a10b3766845f93a051.png"
                alt="detail"
                className="w-5 h-5 cursor-pointer"
                onClick={toggleHandler}
              />
            </div>
          </td>
      
          <td className="w-[20%] truncate p-2" style={{ lineHeight: "2.3rem" }}>
            {DexItem.txHash}
          </td>
          <td className="w-[10%] flex justify-center items-center p-2">
            {DexItem.age}
          </td>
          <td className="w-[10%] flex justify-center items-center p-2">
            {DexItem.action}
          </td>
          <td className="w-[10%] flex justify-center items-center p-2">
            {DexItem.tokenAmountOut}
          </td>
          <td className="w-[20%] truncate p-2" style={{ lineHeight: "2.3rem" }}>
            {DexItem.tokenAmountIn}
          </td>
          <td className="w-[20%] truncate p-2" style={{ lineHeight: "2.3rem" }}>
            {DexItem.swappedRate}
          </td>
          <td className="w-[10%] flex justify-center items-center p-2">
            {DexItem.txnValue}
          </td>
        </tr>
      );
}

export default DexItem