import { ItxList } from "@app/_components/transactionTable/interface";

export interface IAddressData {
    ethBalance: string;
    lastTxnSent: string;
    firstTxnSent: string;
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