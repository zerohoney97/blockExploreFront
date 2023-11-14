export interface TokenDataProps {
    number:? string;
    tokenName: string ;
    unit:string;
    process: string;
    change: string;
    volume: string;
    holders:string
  }

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
