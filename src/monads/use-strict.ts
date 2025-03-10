import { useAtom } from "jotai";

import type { Atom } from "jotai";

export function useAtomStrict<T>(atom: Atom<T | undefined>): T {
  const [value] = useAtom(atom);
  return value!;
}
