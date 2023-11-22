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

export interface ITransactionData {
  transactionHash: string;
  transactionTime: string;
  fromAddress: string;
  toAddress: string;
  ethAmount: string;
}

export interface IResponseTransactionData {
  id: string;
  accessList: string;
  chainId: string;
  from: string;
  gas: string;
  gasPrice: string;
  hash: string;
  input: string;
  maxFeePerGas: string;
  maxPriorityFeePerGas: string;
  r: string;
  s: string;
  to: string;
  transactionIndex: string;
  type: string;
  v: string;
  value: string;
  Method: string;
  Timestamp: string;
  createdAt: string;
  updatedAt: string;
  NFT_id: string;
  token_id: string;
  block_id: string;
  eoa_id: string;
  CA_id: string;
}
