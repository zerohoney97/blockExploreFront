import { useState } from "react";
// import TxList from "./_components/txList/page";
import React from "react";

// 성현
// import Image from 'next/image'
import DetailWrap from "./_components/itemDetail";
import TabWrap from "./_components/tabComponent/TabWrap";

export default function Main() {
  // 무헌이 테스트용 객체
  const data = [
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
    {
      txHash: "0xasd9qwe898da9d90qw8e0qe9df98sdf9",
      method: "Transfer",
      block: 1234,
      from: "0x414125129das9da9sd9123912939",
      to: "0xjthu329ht3928thwe98tg397g781g97",
      value: "2ETH",
      age: 29,
    },
  ];

  // 성현 테스트용 객체
  const count = [
    {
      block_Height: 1,
      block_Time: 3,
      fee_Recipient: "rsync-builder",
      transactions_In_This_Block: 147,
      transactions_Time: 12,
      block_Reward: 0.04742,
    },
    {
      block_Height: 2,
      block_Time: 15,
      fee_Recipient: "Lido: Execution Layer Rewards Vault",
      transactions_In_This_Block: 134,
      transactions_Time: 29,
      block_Reward: 0.02665,
    },
    {
      block_Height: 3,
      block_Time: 15,
      fee_Recipient: "Lido: Execution Layer Rewards Vault",
      transactions_In_This_Block: 134,
      transactions_Time: 29,
      block_Reward: 0.02665,
    },
    {
      block_Height: 2,
      block_Time: 15,
      fee_Recipient: "Lido: Execution Layer Rewards Vault",
      transactions_In_This_Block: 134,
      transactions_Time: 29,
      block_Reward: 0.02665,
    },
    {
      block_Height: 3,
      block_Time: 15,
      fee_Recipient: "Lido: Execution Layer Rewards Vault",
      transactions_In_This_Block: 134,
      transactions_Time: 29,
      block_Reward: 0.02665,
    },
  ];

  // const count = [
  //   {
  //     component_name: "Blocks",
  //     component_count : 1,

  //     component1_1 : "Block",
  //     component1_2 : "1",
  //     component1_3: 16,
  //     component1_2 : "1",
  //     component1_3: 16,

  //     component2_1 : "Fee Recipient",
  //     component2_2 : "Titan Builder",

  //     component3_1 : "102 txns", // transactions in this Block
  //     component3_2 : "in 12 secs",
  //     component3_3 : "0.2503"
  //   }
  // ];

  return (
    <>
      {/* 무헌 */}
      {/* <div>
        <TxList txList={data}></TxList>
      </div> */}
    </>
  );
}
