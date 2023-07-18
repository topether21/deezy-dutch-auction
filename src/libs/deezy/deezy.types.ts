export interface Inscription {
  content_length: string;
  content_type: string;
  created: number;
  genesis_fee: string;
  genesis_height: string;
  id: string;
  num: string;
  owner: string;
  sats: string;
  output: string;
  offset: string;
  inscriptionId: string;
  txid: string;
  version: number;
  locktime: number;
  vin: Vin[];
  vout: number;
  size: number;
  weight: number;
  fee: number;
  status: Status;
  value: number;
}

export interface Status {
  confirmed: boolean;
  block_height: number;
  block_hash: string;
  block_time: number;
}

export interface Vin {
  txid: string;
  vout: number;
  prevout: Prevout;
  scriptsig: string;
  scriptsig_asm: string;
  witness: string[];
  is_coinbase: boolean;
  sequence: number;
}

export interface Prevout {
  scriptpubkey: string;
  scriptpubkey_asm: string;
  scriptpubkey_type: string;
  scriptpubkey_address: string;
  value: number;
}
