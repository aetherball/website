import { atom } from "jotai";
import { atomFamily } from "jotai/vanilla/utils";
import { defaultSystem } from "@chakra-ui/react";

export const themeAtom = atom(defaultSystem);

export const breakpointUpAtomFamily = atomFamily((breakpoint: string) =>
  atom((get) =>
    get(themeAtom)
      .breakpoints.up(breakpoint)
      .replace(/^@media\s*screen\s*and\s*/i, ""),
  ),
);
