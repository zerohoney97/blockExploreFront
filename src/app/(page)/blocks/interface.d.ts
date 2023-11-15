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
  
  
