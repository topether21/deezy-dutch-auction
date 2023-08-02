export type AuctionId = string;
export type AuctionStatus =
  | "SPENT"
  | "RUNNING"
  | "PENDING"
  | "FINISHED"
  | "STOPPED";

export interface AuctionInput {
  startTime: number;
  scheduledISODate: string;
  metadata: AuctionMetadataInput[];
  inscriptionId: string;
  ownerOrdinalsAddress: string;
  txid: string;
  vout: number;
  status: AuctionStatus;
  decreaseAmount: number;
  reservePrice: number;
  currentPrice: number;
  secondsBetweenEachDecrease: number;
  initialPrice: number;
}

export interface Auction extends AuctionInput {
  id: AuctionId;
  auctionId: AuctionId;
  metadata: AuctionMetadata[];
}

export interface AuctionMetadataInput {
  scheduledTime: number;
  endTime: number;
  price: number;
  signedPsbt: string;
  index: number;
}

export interface AuctionMetadata {
  scheduledTime: number;
  endTime: number;
  id: string;
  nostrEventId?: string;
  price: number;
  signedPsbt: string;
  index: number;
}
