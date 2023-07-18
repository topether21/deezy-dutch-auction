import { createClient } from "redis";

export type RedisClientType = ReturnType<typeof createClient>;

export const serialize = (value: any): string => {
  try {
    return JSON.stringify(value);
  } catch (error) {
    console.error(error);
    return "";
  }
};

type HashValues = [string, string][];

function deserialize<T>(value: string): T {
  try {
    return JSON.parse(value) as T;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export class ServerCache {
  db: RedisClientType;
  constructor(client: RedisClientType) {
    this.db = client;
  }

  addDutchAuctions = (actions: HashValues) => {
    return this.db.HSET("dutch", [...actions]);
  };
}
