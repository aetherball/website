import { atom } from "jotai";
import { atomFamily } from "jotai/vanilla/utils";

import { HOYOCAL_ENDPOINT } from "@/constants";
import { formDataAtomFamily, isFormDirtyAtomFamily } from "../state";

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

export const shouldShowFormResultsAtomFamily = atomFamily((game: Game) =>
  atom((get) => {
    const isDirty = get(isFormDirtyAtomFamily(game));
    const link = get(icsLinkAtomFamily(game));

    // Only show the results if we have something that the user has explicitly set
    // (in which case the data is non-empty)
    // and if the user hasn't actively changed the form
    // (in which case it is difficult to reason about 'which' calendars are being shown).
    return !!link && !isDirty;
  }),
);
