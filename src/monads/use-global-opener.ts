import { useCallback, useId } from "react";
import { useAtom } from "jotai";

import { portalLeaseAtom } from "@/states/portal";

import type { PopoverRootProps } from "@chakra-ui/react";
import type { PopoverOpenChangeDetails } from "@chakra-ui/react";

// Because the portal can only ever mount one thing at a time,
// we have to make sure that whatever was using it previously is "closed"
// when we have somoething else that needs to use the portal.
export default function useGlobalOpener(): Pick<
  PopoverRootProps,
  "open" | "onOpenChange"
> {
  const id = useId();
  const [openId, setOpenId] = useAtom(portalLeaseAtom);

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
