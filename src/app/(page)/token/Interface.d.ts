export interface TokenDataProps {
  number: ?string;
  tokenName: string;
  unit: string;
  process: string;
  change: string;
  volume: string;
  holders: string;
}

export interface ITokenDetail {
  tokenDetail: string;
}

export interface ITokenDetailProps {
  params: { tokenDetail: string };
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
