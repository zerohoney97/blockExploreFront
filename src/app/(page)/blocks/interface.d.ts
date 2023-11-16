export interface BlocksDataProps {
    block: string;
    age: string;
    Txn: string;
    feeRecipient: string;
    gasUsed: string;
    gasLimit: string;
    baseFee: string;
    reward: string;
    burntFees: string;
  }

  export interface IBlocksDetail {
    blockdetail: string;
  }
  
  export interface IBlocksDetailProps {
    params: { blockdetail: string };
  }
  export interface IBlocksDetailProps {
    blockHeight: string;
    status: string;
    timeStamp: string;
    proposedOn: string;
    transaction : string
    withdrawals: string;
  }
  
  export interface IBlocksDifficultyProps {
    feeRecipient: string;
    reward: string;
    totalDifficulty: string;
    size: string;
  }
  
  export interface IBlocksGasProps {
    gasUsed: string;
    gasUsedPercent?:any
    gasLimit: string;
    baseFeePerGas: string;
    burntFee: string;
    extraData: string;
  }
  
  export interface IBlocksMoreProps {
    hash: string;
    parentHash: string;
    stateRoot: string;
    withdrawsRoot: string;
    nonce: string;
  }
  
  
