export interface INftTxDetailProps {
  params: { nftId: string };
}

export interface INftTxDetailInventory {
  tokenId: string;
  owner: string;
}

export interface INftTxDetailInventoryProps{
  nftInvenData:INftTxDetailInventory
}