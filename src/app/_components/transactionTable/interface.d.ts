// interface ItxList {
//     txHash: string;
//     method: string;
//     block: string;
//     from: string;
//     to: string;
//     value: string;
//     age: string;
//   }
export interface ItxList {
  txHash: string;
  block: string;
  method: string;
  to: string;
  from: string;
  value: string;
  age: string;
}

export interface TxListProps {
  txList: ItxList[];
}

export interface TxListWrapProps {
  pageTxList: ItxList[] | null;
  toggleHandler: () => void;
}

export interface TxItemProps {
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


export interface IPageNationProps{
  page:number
  pageHandler:(selectedNumber:number)=>void
  maxPage:number
}