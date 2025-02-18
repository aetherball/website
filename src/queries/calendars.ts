import { atomWithSuspenseQuery } from "jotai-tanstack-query";

import { gameAtom } from "@/states/navigation";
import { HOYOCAL_ENDPOINT } from "@/constants";

import type { Getter } from "jotai";

export const supportedCalendarsAtom = atomWithSuspenseQuery((get: Getter) => ({
  queryKey: ["users", get(gameAtom)!],
  queryFn: async ({ queryKey: [, game] }) => {
    const res = await fetch(`${HOYOCAL_ENDPOINT}/games/${game}/calendars.json`);
    const calendars = await res.json();
    return calendars as string[];
  },
}));
