import { useMemo } from "react";
import { defaultSystem as system } from "@chakra-ui/react";

export function useBreakpointUp(breakpoint: string) {
  return useMemo(
    () =>
      system.breakpoints
        .up(breakpoint)
        .replace(/^@media\s*screen\s*and\s*/i, ""),
    [breakpoint],
  );
}
