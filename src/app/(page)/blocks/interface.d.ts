export interface IBlocksDataProps {
    block: string;
    age: string;
    Txn: string;
    feeRecipient: string;
    gasUsed: string;
    gasUsedPercent?:number
    gasLimit: string;
    baseFee: string;
    reward: string;
    burntFees: string;
    burntFeesPercent:number
  }

  export interface IBlocksDetail {
    blockdetail: string;
    maxHeight?:string
    pageStack?:number
  }
  
  export interface IBlocksDetailProps {
    params: { blockdetail: string };
  }
  export interface BlocksInfoProps {
    blockHeight: any;
    status: string;
    timeStamp: string;
    slot:string;
    epoch:string
    transaction : string
    withdrawals: string;
  }
  

  
