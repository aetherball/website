import { atom } from "jotai";

import { HOYOCAL_ENDPOINT } from "@/constants";

import type { CalendarSelectionFormData } from "./schema";

export const calendarSelectionFormDataAtom = atom<
  CalendarSelectionFormData | undefined
>();

export const calendarLinkAtom = atom((get) => {
  const data = get(calendarSelectionFormDataAtom);
  if (!data) return undefined;

  const { game, calendars, region, format } = data;

  const params = new URLSearchParams({
    format,
    region,
  });
  const url = `${HOYOCAL_ENDPOINT}/games/${game}/calendars/${calendars.join(",")}.ics?${params.toString()}`;

  return url;
});
