import * as WebSocket from "ws";
import { createClient as createWsClient } from "graphql-ws";
// import { writeFileSync } from "fs";

import {
  DutchAuction,
  everything,
  generateSubscriptionOp,
} from "./../../generated";
import { isFulfilled, print } from "./../../utils";
import { parseAuction } from "./../../parse";
import { getInscription } from "../deezy/deezy";
import { serialize, ServerCache } from "./../../cache";

class WebSocketImpl extends WebSocket {
  constructor(address: string, protocols: string) {
    super(address, protocols, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "x-hasura-admin-secret": process.env.HASURA_ADMIN_SECRET || "",
      },
    });
  }
}

const client = createWsClient({
  url: process.env.HASURA_ENDPOINT || "",
  webSocketImpl: WebSocketImpl,
});

const auctionAttributes = {
  ...everything,
  dutch_auction_auction_metadata: {
    ...everything,
  },
};

const { query, variables } = generateSubscriptionOp({
  dutchAuctionStream: {
    ...auctionAttributes,
    __args: {
      batchSize: 10,
      cursor: [
        {
          ordering: "ASC",
          initialValue: {
            updatedAt: new Date(0).toISOString(),
          },
        },
      ],
    },
  },
});

export const subscribeToAuctions = async (db: ServerCache) => {
  return client.subscribe(
    { query, variables },
    {
      next: async (response) => {
        console.log("new data");
        const data = (
          response.data.dutchAuctionStream as Partial<DutchAuction[]>
        ).map((a) => parseAuction(a));
      },
      error: console.error,
      complete: () => console.log("finished"),
    }
  );
};
