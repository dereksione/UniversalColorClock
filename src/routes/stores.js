import { writable, derived } from "svelte/store";
import { returnVals } from "./clock";

const vals = returnVals();

export const timeString = writable(vals[0]);
export const colorCode = writable(vals[1]);
export const normalColor = writable(vals[2]);
export const saturatedColor = writable(vals[3]);


export const walletAddress = writable(null);
export const derivedWalletAddress = derived(walletAddress, $walletAddress => $walletAddress);
export const buyQty = writable("1");
