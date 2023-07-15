export const TESTNET = false;
export const TURBO_API = TESTNET
  ? "https://turbo-ordinals-testnet.deezy.io"
  : "https://turbo-ordinals.deezy.io";
export const INSCRIPTIONS_OUTPOINT = "INSCRIPTION_OUTPOINT";
export const MEMPOOL_API_URL = TESTNET
  ? "https://mempool.space/testnet"
  : "https://mempool.deezy.io";
