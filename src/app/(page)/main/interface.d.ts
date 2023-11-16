export interface IBlockInfoProps {
  blockHeight: number;
  blockTime: number;
}

interface IBlocksItem {
  blockHeight: number;
  blockTime: number;
  feeRecipient: string;
  transactionsInThisBlock: number;
  transactionsTime: number;
  blockReward: number;
}
interface ITransactionsItem {
  transactionHash: string;
  transactionTime: number;
  fromAddress: string;
  toAddress: string;
  ethAmount: number;
}
export interface IBlocksItemProps {
  blocksItem: IBlocksItem;
}
interface ITransactionsItemProps {
  transactionsData: ITransactionsItem;
}

export interface MainLatestResponsiveWrapProps{
  blocksData : IBlocksItem[],
  transactionsData : ITransactionsItem[]
}

export interface IBlocksListProps {
  blocksList: IBlocksItem[];
}

export interface ITransactionsListProps {
  transactionslist: ITransactionsItem[];
}

export interface IMinerProps {
  feeRecipient: string;
}

export interface ITransactionsNumberProps {
  transactionsInThisBlock: number;
  transactionsTime: number;
  blockHeight: number;
}

export interface ITransactionHashInfoProps {
  transactionHash: string;
  transactionTime: number;
}

export interface ITransactionFrom {
  fromAddress: string;
}

export interface ITransactionTo {
  toAddress: string;
}

export interface ILatestBlocksButtonProps {
  buttonName: string;
}
export interface ILatestTransactionsButtonProps {
  buttonName: string;
}

interface IOverviewTransactionsData {
  totalTransactionsCounter: number;
  transactionsPerSecond: number;
  baseFee: number;
  priorityFee: number;
}
interface IOverviewLastFinalizedBlockData {
  lastFinalizedBlock: number;
  lastSafeBlock: number;
}
export interface IOverviewProps {
  overviewTransactionsData: IOverviewTransactionsData;
  overviewLastFinalizedBlockData: IOverviewLastFinalizedBlockData;
}

export interface IOverviewTransactionsDataProps {
  overviewTransactionsData: IOverviewTransactionsData;
}

export interface IGasPriceIndicatorProps {
  baseFee: number;
  priorityFee: number;
}

export interface ITransactionsVolumeProps {
  totalTransactionsCounter: number;
  transactionsPerSecond: number;
}

interface IOverviewLastFinalizedBlockData {
  lastFinalizedBlock: number;
  lastSafeBlock: number;
}
interface IOverviewLastFinalizedBlockDataProps {
  overviewLastFinalizedBlockData: IOverviewLastFinalizedBlockData;
}

export interface IMainFinalizedBlockProps {
  lastFinalizedBlock: number;
}
