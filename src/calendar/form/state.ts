import { atom } from "jotai";
import { atomFamily } from "jotai/vanilla/utils";

import { atomFamilyWithStorage } from "@/monads/family-with-storage";

import type { PrimitiveAtom } from "jotai";
import type { Game } from "@/routes";
import type { CalendarSelectionFormData } from "./schema";

export const formDataAtomFamily = atomFamilyWithStorage<
  Game,
  CalendarSelectionFormData | undefined
>(`calendar-form-data`, undefined);

export const formDataDefaultValuesAtomFamily = atomFamily((game: Game) =>
  atom((get) => {
    const formData = get(formDataAtomFamily(game));
    return formData
      ? { ...formData, game }
      : { game, calendars: [], format: undefined, region: undefined };
  }),
);

export const isFormDirtyAtomFamily = atomFamily<Game, PrimitiveAtom<boolean>>(
  () => atom(false),
);
