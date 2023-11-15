export interface IqnaInput {
  title: string;
}

export interface Iitem {
  number: string;
  collection: string;
  name: string;
  volume: string;
  change: string;
  minPrice: string;
  maxPrice: sting;
  sales: sting;
  transfers: sting;
  owners: sting;
  totalAssets: sting;
  type: string;
}

export interface IitemProps {
  pageTxList: Iitem[];
}
export interface INftTxDetailProps {
  params: { nftId: string };
}

export interface INftTxDetailInventory {
  tokenId: string;
  owner: string;
}

export interface INftTxDetailInventoryProps {
  nftInvenData: INftTxDetailInventory;
}
