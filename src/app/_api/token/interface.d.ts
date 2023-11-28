export interface IResponseTokenData {
  id: number;
  contractAddress: string;
  name: string;
  symbol: string;
  ownerAddress: string;
  decimal: number;
  circulatingSupply: string;
  createdAt: string;
  updatedAt: string;
}


export interface ITokenListData{
    id:number
    name:string
    symbol:string
    decimal:number
    timeStamp:string
    holder:string
}