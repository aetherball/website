import { atom } from "jotai";

export const portalLeaseAtom = atom<string | undefined>(); // there's only ever one portal!
