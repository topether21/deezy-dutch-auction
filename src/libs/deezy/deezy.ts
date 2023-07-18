import axios from "axios";
import { MEMPOOL_API_URL, TURBO_API } from "../../config";
import { Inscription } from "./deezy.types";

export const parseOutpoint = (outpoint: string) => {
  const rawVout = outpoint.slice(-8);
  const txid = outpoint
    .substring(0, outpoint.length - 8)
    .match(/[a-fA-F0-9]{2}/g)
    .reverse()
    .join("");

  const vout = parseInt(rawVout, 16);

  return [txid, vout];
};

export const getOutpoint = async (inscriptionId: string) => {
  try {
    const result = await axios.get(
      `${TURBO_API}/inscription/${inscriptionId}/outpoint`
    );
    return result.data;
  } catch (error) {
    console.error(error);
  }
  return undefined;
};

export const getInscription = async (
  inscriptionId: string
): Promise<Inscription> => {
  let collection;

  const { data: inscriptionData } = await axios.get(
    `${TURBO_API}/inscription/${inscriptionId}`
  );

  const outpointResult = await getOutpoint(inscriptionId);
  const {
    inscription: { outpoint },
    owner,
  } = outpointResult;

  const [txid, vout] = parseOutpoint(outpoint);

  // Get related transaction
  const { data: utxo } = await axios.get(`${MEMPOOL_API_URL}/api/tx/${txid}`);

  // get value of the utxo
  const { value } = utxo.vout[vout];

  if (inscriptionData?.collection?.name) {
    try {
      const { data } = await axios.get(
        `${TURBO_API}/collection/${inscriptionData?.collection?.slug}`
      );
      collection = data;
    } catch (e) {
      console.warn("No collection found");
    }
  }

  return {
    collection,
    ...inscriptionData,
    inscriptionId,
    ...utxo,
    vout,
    value,
    owner,
  };
};
