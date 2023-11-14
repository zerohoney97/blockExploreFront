import React from 'react'
import TokenCardContent from '../../_contents/CardContent'

interface TokenCardProps {
    title: string
    MaxTotalSupply:string
    holders:string
    totaltransfers:string

}

const index: React.FC<TokenCardProps> = ({ title,MaxTotalSupply,holders,totaltransfers}) => {
    return (
      <div className=" flex flex-col gap-5 ">
        <div>
          <h3 className="text-base font-semibold mb-0">{title}</h3>
        </div>
        <div className="text-xs">{MaxTotalSupply}</div>
        <div className="text-xs">{holders}</div>
        <div className="text-xs">{totaltransfers}</div>
      </div>
    );
}

export default index