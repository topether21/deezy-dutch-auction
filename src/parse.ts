import { Auction, AuctionMetadata } from "./types/auction";
import { DutchAuction, enumAuctionStatusEnum } from "./generated";

export const parseAuction = (
  auction: Partial<DutchAuction> | null
): Auction | null => {
  if (!auction || !auction.auctionId) return null;
  const {
    initialPrice,
    auctionId,
    currentPrice,
    decreaseAmount,
    dutch_auction_auction_metadata: AuctionMetadata,
    id,
    inscriptionId,
    ownerOrdinalsAddress,
    reservePrice,
    scheduledISODate,
    secondsBetweenEachDecrease,
    startTime,
    status,
    txid,
    vout,
  } = auction;

  const metadata: AuctionMetadata[] =
    AuctionMetadata?.map((m) => ({
      auctionId: String(m.auctionId || ""),
      endTime: Number(m.endTime),
      id: m.id,
      index: m.index,
      nostrEventId: m.nostrEventId || "",
      signedPsbt: m.signedPsbt,
      scheduledTime: m.scheduledTime,
      price: m.price,
    })) || [];

  return {
    auctionId,
    currentPrice: currentPrice || 0,
    initialPrice: initialPrice || 0,
    decreaseAmount: decreaseAmount || 0,
    metadata,
    id,
    inscriptionId: inscriptionId || "",
    ownerOrdinalsAddress: ownerOrdinalsAddress || "",
    reservePrice: reservePrice || 0,
    scheduledISODate,
    secondsBetweenEachDecrease: secondsBetweenEachDecrease || 0,
    startTime,
    txid: txid || "",
    vout: vout || 0,
    status: status || enumAuctionStatusEnum.PENDING,
  };
};
