import { atom } from "jotai";
import { atomFamily } from "jotai/vanilla/utils";

import { HOYOCAL_ENDPOINT } from "@/constants";
import { formDataAtomFamily } from "../state";

import type { Game } from "@/routes";

export const icsLinkAtomFamily = atomFamily((game: Game) =>
  atom((get) => {
    const formData = get(formDataAtomFamily(game));
    if (!formData) return undefined;

    const { calendars, region, format } = formData;

    const params = new URLSearchParams({
      format,
      region,
    });
    return `${HOYOCAL_ENDPOINT}/games/${game}/calendars/${calendars.join(
      ",",
    )}.ics?${params.toString()}`;
  }),
);
