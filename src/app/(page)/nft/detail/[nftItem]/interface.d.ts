export interface INftETHIndicatorProps {
  title: string;
  ethValue: number;
  ethValueDollar: number;
}

// details
export interface INftDetailsTitleProps {
  stateProps: boolean;
  stateSetProps: (newState: boolean) => void;
}
export interface INftDetailsListProps {
  stateProps: boolean;
}
export interface INftDetailsItemProps {
  name: string;
  address: string;
}

// activity
interface INftALTotalRecordProps {
  totalCount: number;
}
interface INftAListProps {
  txnHash: string;
  age: string;
  action: string;
  price: string;
  from: string;
  to: string;
}
interface INftAListOA {
  pageTxList:INftAListProps[]
}

