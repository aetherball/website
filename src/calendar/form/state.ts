import { atom } from "jotai";
import { atomFamily } from "jotai/vanilla/utils";

import { atomFamilyWithStorage } from "@/monads/family-with-storage";

import type { Game } from "@/routes";
import type { CalendarSelectionFormData } from "./schema";

export const formDataAtomFamily = atomFamilyWithStorage<
  Game,
  CalendarSelectionFormData | undefined
>(`calendar-form-data`, undefined);

export const formDataDefaultValuesAtomFamily = atomFamily((game: Game) =>
  atom((get) => {
    const formData = get(formDataAtomFamily(game));
    return formData ? { ...formData, game } : { game };
  }),
);
