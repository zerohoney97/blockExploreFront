export interface NftETHIndicatorProps {
  title: string;
  ethValue: number;
  ethValueDollar: number;
}

// details
export interface INftDetailsTitleProps{
  stateProps : boolean,
  stateSetProps: (newState: boolean) => void;
}
export interface INftDetailsListProps {
  stateProps: boolean;
}
export interface NftDetailsItemProps{
  name : string,
  address : string,
}
export interface NftDetailsItemProps{
  name : string,
  address : string,
}
