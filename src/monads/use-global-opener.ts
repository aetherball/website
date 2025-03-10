import { useCallback, useId } from "react";
import { atom, useAtom } from "jotai";

import type { PopoverRootProps } from "@chakra-ui/react";
import type { PopoverOpenChangeDetails } from "@chakra-ui/react";

const globalOpenStateAtom = atom(); // there's only ever one portal!

export default function useGlobalOpener(): Pick<
  PopoverRootProps,
  "open" | "onOpenChange"
> {
  const id = useId();
  const [openId, setOpenId] = useAtom(globalOpenStateAtom);

  // When something is actually clicked open, set the global open state to the id of the thing that was clicked
  // When the global open state changes to be something other than the current id, close self

  const onOpenChange = useCallback(
    (e: PopoverOpenChangeDetails) => {
      if (e.open) setOpenId(id);
      else if (openId === id) setOpenId(undefined);
      // No-op otherwise to save on unnecessary changes
    },
    [id, openId, setOpenId],
  );

  return {
    open: openId === id,
    onOpenChange,
  };
}
