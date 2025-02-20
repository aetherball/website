import {
  atomFamily,
  atomWithStorage,
  createJSONStorage,
} from "jotai/vanilla/utils";

// It is not trivial at all to get atomFamily that actually works with localStorage.
// In particular, either the atom family doesn't work, or the writes don't actually 'push through'.
// The only way to get it to work is to create our own storage and pass it in with the `getOnInit` flag turned to true.
export const atomFamilyWithStorage = <K, V>(
  prefix: string,
  initialValue: V,
) => {
  const storage = createJSONStorage<V>(() => localStorage);

  return atomFamily((param: K) =>
    atomWithStorage<V>(`${prefix}-${param}`, initialValue, storage, {
      getOnInit: true,
    }),
  );
};
