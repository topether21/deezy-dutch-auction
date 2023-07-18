import { inspect } from "util";

export const print = (object: any) =>
  console.log(inspect(object, false, null, true /* enable colors */));

export function isFulfilled<T>(
  item: PromiseSettledResult<T>
): item is PromiseFulfilledResult<T> {
  return item.status === "fulfilled";
}
