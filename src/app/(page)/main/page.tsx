// import React from "react";

// import SearchBarWrap from "./_contents/searchBarWrap/SearchBarWrap";
// import EthereumOverview from "./_contents/ethereumOverview/EthereumOverview";
// import LatestResponsiveWrap from "./_contents/latestResponsiveWrap/LatestResponsiveWrap";

// const MainPage =  () => {


//   const overviewTransactionsData = {
//     totalTransactionsCounter: 2155.7,
//     transactionsPerSecond: 12.7,
//     baseFee: 42,
//     priorityFee: 1.81,
//   };
//   const overviewLastFinalizedBlockData = {
//     lastFinalizedBlock: 18562780,
//     lastSafeBlock: 18562812,
//   };
//   const blocksData = [
//     {
//       blockHeight: 1,
//       blockTime: 3,
//       feeRecipient: "rsync-builder",
//       transactionsInThisBlock: 147,
//       transactionsTime: 12,
//       blockReward: 0.04742,
//     },
//     {
//       blockHeight: 2,
//       blockTime: 6,
//       feeRecipient: "lucid",
//       transactionsInThisBlock: 284,
//       transactionsTime: 24,
//       blockReward: 0.642,
//     },
//     {
//       blockHeight: 3,
//       blockTime: 9,
//       feeRecipient: "demian",
//       transactionsInThisBlock: 321,
//       transactionsTime: 36,
//       blockReward: 0.856,
//     },
//     {
//       blockHeight: 4,
//       blockTime: 3,
//       feeRecipient: "rsync-builder",
//       transactionsInThisBlock: 147,
//       transactionsTime: 12,
//       blockReward: 0.04742,
//     },
//     {
//       blockHeight: 5,
//       blockTime: 6,
//       feeRecipient: "lucid",
//       transactionsInThisBlock: 284,
//       transactionsTime: 24,
//       blockReward: 0.642,
//     },
//     {
//       blockHeight: 6,
//       blockTime: 9,
//       feeRecipient: "demian",
//       transactionsInThisBlock: 321,
//       transactionsTime: 36,
//       blockReward: 0.856,
//     },
//   ];
//   const transactionsData = [
//     {
//       transactionHash:
//         "0x983cbc79e7730750650e00b96ffc817a88a6985031399af70bf2adf0e9bf4db3",
//       transactionTime: 13,
//       fromAddress: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
//       toAddress: "0xeBec795c9c8bBD61FFc14A6662944748F299cAcf",
//       ethAmount: 0.03384,
//     },
//     {
//       transactionHash:
//         "0x21bf662527673bea67ff38144bbda5de9e22595df868467c4e6950f29be9a028",
//       transactionTime: 26,
//       fromAddress: "0x5005c06D47A8814c20Fe8F6B9F18807A45fa57F1",
//       toAddress: "0x388C818CA8B9251b393131C08a736A67ccB19297",
//       ethAmount: 0.4321,
//     },
//     {
//       transactionHash:
//         "0x983cbc79e7730750650e00b96ffc817a88a6985031399af70bf2adf0e9bf4db3",
//       transactionTime: 13,
//       fromAddress: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
//       toAddress: "0xeBec795c9c8bBD61FFc14A6662944748F299cAcf",
//       ethAmount: 0.03384,
//     },
//     {
//       transactionHash:
//         "0x21bf662527673bea67ff38144bbda5de9e22595df868467c4e6950f29be9a028",
//       transactionTime: 26,
//       fromAddress: "0x5005c06D47A8814c20Fe8F6B9F18807A45fa57F1",
//       toAddress: "0x388C818CA8B9251b393131C08a736A67ccB19297",
//       ethAmount: 0.4321,
//     },
//     {
//       transactionHash:
//         "0x983cbc79e7730750650e00b96ffc817a88a6985031399af70bf2adf0e9bf4db3",
//       transactionTime: 13,
//       fromAddress: "0x1f9090aaE28b8a3dCeaDf281B0F12828e676c326",
//       toAddress: "0xeBec795c9c8bBD61FFc14A6662944748F299cAcf",
//       ethAmount: 0.03384,
//     },
//     {
//       transactionHash:
//         "0x21bf662527673bea67ff38144bbda5de9e22595df868467c4e6950f29be9a028",
//       transactionTime: 26,
//       fromAddress: "0x5005c06D47A8814c20Fe8F6B9F18807A45fa57F1",
//       toAddress: "0x388C818CA8B9251b393131C08a736A67ccB19297",
//       ethAmount: 0.4321,
//     },
//   ];

//   return (
//     <>
//       <SearchBarWrap />

//       <EthereumOverview
//         overviewTransactionsData={overviewTransactionsData}
//         overviewLastFinalizedBlockData={overviewLastFinalizedBlockData}
//       />

//       <LatestResponsiveWrap
      
//         blocksData={blocksData}
//         transactionsData={transactionsData}
//       />
//     </>
//   );
// };

// export default MainPage;
