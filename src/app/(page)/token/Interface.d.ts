export interface TokenDataProps {
    number:? string;
    tokenName: string ;
    unit:string;
    process: string;
    change: string;
    volume: string;
    holders:string
  }

  export interface ITokenDetail{
    tokenDetail:string
  }

  export interface ITokenDetailProps{
     params : {tokenDetail:string}
  }