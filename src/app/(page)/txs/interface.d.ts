export interface IblockstxnList {
  txHash: string;
  method: string;
  block: string;
  from: string;
  to: string;
  value: string;
  age: string;
}

export interface IMordeDetailToggleProps {
  mordeDetailToggle: boolean;
  moreDetailToggleHandler: () => void;
}
