import React from "react";
import ActivityTitle from "./ActivityTitle";
import ActivityContents from "./ActivityContents";

interface NftActivity {
  id: string;
  accessList: string;
  chainId: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  r: string;
  s: string;
  to: string;
  transactionIndex: string;
  type: string;
  v: string;
  value: string;
  Method: string;
  Timestamp: string;
  createdAt: string;
  updatedAt: string;
  blocknumber:number
  NFT_id: string;
  token_id: string;
  block_id: string;
  eoa_id: string;
  CA_id: string;
}

interface INftActivityProps{
  activityData : NftActivity;
}

const NftActivity:React.FC<INftActivityProps> = ({activityData}) => {
  const abc = [{
    txnHash:
          "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
    age: "49 mins ago",
    action: "AAA",
    price: "0.03 ETH",
    from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
  },{
    txnHash:
          "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
    age: "49 mins ago",
    action: "BBB",
    price: "0.03 ETH",
    from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
  },{
    txnHash:
          "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
    age: "49 mins ago",
    action: "AAA",
    price: "0.03 ETH",
    from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
  },{
    txnHash:
          "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
    age: "49 mins ago",
    action: "BBB",
    price: "0.03 ETH",
    from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
  },{
    txnHash:
          "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
    age: "49 mins ago",
    action: "AAA",
    price: "0.03 ETH",
    from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
  },{
    txnHash:
          "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
    age: "49 mins ago",
    action: "BBB",
    price: "0.03 ETH",
    from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
    to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
  }];
  // console.log(abc);

  if(activityData === null){

  }
  return (
    <div className="border-gray border-[1px] rounded-xl bg-white">
      <ActivityTitle />
      <ActivityContents activityData= {abc} />
    </div>
  );
};

export default NftActivity;
