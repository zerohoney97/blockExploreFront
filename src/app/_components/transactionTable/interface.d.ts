export interface ItxList {
  txHash: string;
  method: string;
  block: string;
  from: string;
  to: string;
  value: string;
  age: string;
}
export interface ItokenList {
  txHash: string;
  block: string;
  method: string;
  to: string;
  from: string;
  value: string;
  age: string;
}

export interface ITxListProps {
  txList: ItxList[];
  lastThName: string;
  maxHeight?:string
  pageStack?:number
}

export interface ITxListWrapProps {
  pageTxList: ItxList[] | null;
  toggleHandler: () => void;
}

export interface ITxItemProps {
  TxItem: ItxList;
  toggleHandler: () => void;
}

export interface IAddInfo {
  status: string;
  transactionFee: string;
  gasInfo: string;
  nonce: string;
  gasLimit: string;
  blockNum: string;
  position: string;
}

export interface IAdditionalInfoProps {
  addInfoTempData: IAddInfo;
  toggleHandler: () => void;
}

export interface IPageNationProps {
  page: number;
  pageHandler: (selectedNumber: number) => void;
  maxPage: number;
}
