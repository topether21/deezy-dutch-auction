import * as WebSocket from "ws";
import { createClient as createWsClient } from "graphql-ws";

import {
  DutchAuction,
  everything,
  generateSubscriptionOp,
} from "./../../generated";
import { print } from "./../../utils";
import { parseAuction } from "./../../parse";

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
      batchSize: 5,
      cursor: [
        {
          ordering: "DESC",
          initialValue: {
            currentPrice: 100,
          },
        },
      ],
    },
  },
});

client.subscribe(
  { query, variables },
  {
    next: (response) => {
      console.log("new data");
      // as dutchAuction;;
      const data = (
        response.data.dutchAuctionStream as Partial<DutchAuction[]>
      ).map((a) => parseAuction(a));
      console.log("------>", data.length);
      print(data.map((a) => a.id));
    },
    error: console.error,
    complete: () => console.log("finished"),
  }
);

export { client };
