export interface ITokenTransfer{
  txHash: string;
  method: string;
  block: string;
  from: string;
  to: string;
  value: string;
  age: string;
  token:string
}

export interface ITokenTransferProps{
  pageTxList: ITokenTransfer[] | null;
  toggleHandler: () => void;
}

export interface ITokenTransferItemProps {
  TxItem: ITokenTransfer;
  toggleHandler: () => void;
}