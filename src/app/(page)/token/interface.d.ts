import { IResponseTokenData, ITokenListData } from "@app/_api/token/interface";
import { ItxList } from "@app/_components/transactionTable/interface";

export type TokenDataProps = ITokenListData;

export interface ITokenDetail {
  tokendetail: string;
}

export interface ITokenDetailProps {
  params: { tokendetail: string };
}

export interface HoldersDataProps {
  rank: ?string;
  address: string;
  quantity: string;
  value: string;
}

export interface IHoldersDetail {
  holdersDetail: string;
}

export interface IHoldersDetailProps {
  params: { holdersDetail: string };
}

export interface ITokenTableProps {
  tokenListData: TokenDataProps[];
}

export type ITokenDetailData = IResponseTokenData;
export interface ITokenDetailDataProps {
  tokenItemData: ITokenDetailData;
}

export interface ITokenTransferContainerProps {
  tokenTransferDataList: ItxList[];
}

export type ITokenTransfer = ItxList;

export interface ITokenTransferProps {
  pageTxList: ITokenTransfer[] | null;
  toggleHandler: () => void;
}

export interface ITokenTransferItemProps {
  TxItem: ITokenTransfer;
  toggleHandler: () => void;
}
