export interface WithdrawalDataProps {
  index: string;
  block: string;
  age: string;
  validatorIndex: string;
  recipient: string;
  value?:number

  }

  export interface IBlocksDetail {
    blockdetail: string;
  }
  
  export interface IBlocksDetailProps {
    params: { blockdetail: string };
  }
