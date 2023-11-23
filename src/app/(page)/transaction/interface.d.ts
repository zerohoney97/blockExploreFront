import { ItxList } from "@app/_components/transactionTable/interface";

export interface IMordeDetailToggleProps {
  mordeDetailToggle: boolean;
  moreDetailToggleHandler: () => void;
}

export interface ITransactionListWrapProps {
  transactionList: ItxList[];
}
