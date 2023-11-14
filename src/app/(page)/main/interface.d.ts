export interface IBlockInfoProps {
  blockHeight: number;
  blockTime: number;
}

export interface IBlocksItem {
  blockHeight: number;
  blockTime: number;
  feeRecipient: string;
  transactionsInThisBlock: number;
  transactionsTime: number;
  blockReward: number;
}
export interface IBlocksItemProps {
  blocksItem: IBlocksItem;
}

export interface IBlocksList {
  blockHeight: number;
  blockTime: number;
  feeRecipient: string;
  transactionsInThisBlock: number;
  transactionsTime: number;
  blockReward: number;
}
export interface IBlocksListProps {
    blocksList: IBlocksList[];
}

export interface ITransactionsItem {
  transactionHash: string;
  transactionTime: number;
  fromAddress: string;
  toAddress: string;
  ethAmount: number;
}
export interface ITransactionsItemProps {
  transactionsItem: ITransactionsItem;
}

export interface ITransactionsList {
  transactionHash: string;
  transactionTime: number;
  fromAddress: string;
  toAddress: string;
  ethAmount: number;
}
export interface ITransactionsListProps {
  transactionslist: ITransactionsList[];
}

export interface IMinerProps {
  feeRecipient: string;
}

export interface ITransactionsNumberProps {
  transactionsInThisBlock: number;
  transactionsTime: number;
  blockHeight: number;
}

export interface ITransactionHashInfoProps{
  transactionHash : string,
  transactionTime : number
}

export interface ITransactionFrom {
  fromAddress : string
}

export interface ITransactionTo{
  toAddress : string
}