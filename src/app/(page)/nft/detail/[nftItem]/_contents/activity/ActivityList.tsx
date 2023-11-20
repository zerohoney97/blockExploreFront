import React, { useEffect, useState } from "react";
import ALPagination from "./ALPagination";
import ALTotalRecord from "./ALTotalRecord";
import AList from "./AList";


const NftActivityList = () => {
  const acitivityList = [
    {
      txnHash:
        "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "0x5f7c428d98143996829bd98ad085f282fd8648a772dd7e5d255e0d8fbd08c085",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "3",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "4",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "5",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "6",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "7",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "8",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "9",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "10",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "0x5f7c428d98143996829bd98ad085f282fd8648a772dd7e5d255e0d8fbd08c085",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "3",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "4",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "5",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "0x5f7c428d98143996829bd98ad085f282fd8648a772dd7e5d255e0d8fbd08c085",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "3",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "4",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "5",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "0x5f7c428d98143996829bd98ad085f282fd8648a772dd7e5d255e0d8fbd08c085",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "3",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "4",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "5",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "0xca433abccf1dcae6d49fedaf89af3fdbebdfb4039ebd429578e230a13daecae5",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "0x5f7c428d98143996829bd98ad085f282fd8648a772dd7e5d255e0d8fbd08c085",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "3",
      age: "49 mins ago",
      action: "Sale",
      price: "0.03 ETH ($58.33)",
      from: "0x05deF240E528c952812bE0f637bC7ec068C87e3b",
      to: "0x10eD36eb9f1ED49599623e2DB4874f384462fd62",
    },
    {
      txnHash:
        "4",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
    {
      txnHash:
        "5",
      age: "1hr 15 mins ago",
      action: "Sale",
      price: "0.05999999999998 ETH ($116.66)",
      from: "0x721B70242880AD85AE1B5f456C05AA8e1ae4e712",
      to: "0x5aA5c645F8bb12a92c3ED8232C58bD94B13c09e2",
    },
  ];

  return (
    <>
      <div className='px-5'>
        {/* <ALTotalRecord totalCount={1709} /> */}
        {/* <ALPagination /> */}
        {/* <ALItem /> */}
        <AList acitivityList={acitivityList} />
      </div>
    </>
  );
};

export default NftActivityList;
