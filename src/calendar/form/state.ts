import { atom } from "jotai";
import { atomFamily } from "jotai/vanilla/utils";

import type { Game } from "@/routes";
import type { CalendarSelectionFormData } from "./schema";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const formDataAtomFamily = atomFamily((_game: Game) =>
  atom<CalendarSelectionFormData | undefined>(),
);

export const formDataDefaultValuesAtomFamily = atomFamily((game: Game) =>
  atom((get) => {
    const formData = get(formDataAtomFamily(game));
    return formData ? { ...formData, game } : { game };
  }),
);
