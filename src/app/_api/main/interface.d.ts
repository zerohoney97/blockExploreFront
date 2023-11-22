export interface IBlocksItem {
  blockHeight: string;
  blockTime: string;
  feeRecipient: string;
  transactionsInThisBlock: string;
  transactionsTime: string;
}

export interface IResponseBlockData {
  baseFeePerGas: string;
  createdAt: string;
  difficulty: string;
  extraData: string;
  gasLimit: string;
  gasUsed: string;
  hash: string;
  id: number;
  logsBloom: string;
  miner: string;
  mixHash: string;
  nonce: string;
  number: string;
  parentHash: string;
  receiptsRoot: string;
  sha3Uncles: string;
  stateRoot: string;
  timestamp: string;
  transactionsRoot: string;
  updatedAt: string;
  withdrawalsRoot: string;
}
