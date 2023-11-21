export interface InftTransList {
  transcationInfo: string;
  method: string;
  block: string;
  from: string;
  to: string;
  type: string;
  item: string;
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
  transactionAction: string;
  transactionFee: string;
  gasInfo: string;
  nonce: string;
  position?: string;
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


export interface IMordeDetailToggleProps {
  mordeDetailToggle: boolean;
  moreDetailToggleHandler: () => void;
}
