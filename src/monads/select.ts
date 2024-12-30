import { useMemo, useCallback } from "react";
import { useAtom, type WritableAtom } from "jotai";
import type { SelectRootProps } from "@chakra-ui/react";

export type WrappedValue<T> = SelectRootProps<T>["value"];

type ListCollectionItem<T> = {
  label: string;
  value: T;
};
type OnChangeParam<T> = Parameters<
  NonNullable<SelectRootProps<ListCollectionItem<T>>["onValueChange"]>
>[0];

export type WrappedValueSetter<T> = (details: OnChangeParam<T>) => void;

// The select component in chakra-ui *always* works with a list type,
// even if we only ever want to deal with one item at a time.
// So passing the value, setValue pair directly to the select component
// doesn't work, and instead it needs to be wrapped with a monad
// that helps "wrap" it into the list and then "unwrap" it for setValue.
export function useAtomForSelect<T extends string>(
  atom: WritableAtom<T | undefined, [T], void>,
): [WrappedValue<T>, WrappedValueSetter<T>] {
  const [value, setValue] = useAtom(atom);

  const wrappedValue = useMemo(
    () => (value === undefined ? undefined : [value]),
    [value],
  );

  const wrappedSetValue = useCallback(
    (details: OnChangeParam<T>) => {
      const value = details.value[0];
      setValue(value as T);
    },
    [setValue],
  );

  return [wrappedValue, wrappedSetValue];
}
