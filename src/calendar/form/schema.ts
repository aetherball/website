import { Type as T, type Static } from "@sinclair/typebox";

import { GameSchema } from "@/routes";

export const CalendarFormatSchema = T.Union([
  T.Literal("range"),
  T.Literal("point"),
  T.Literal("point-end"),
]);
export type CalendarFormat = Static<typeof CalendarFormatSchema>;

export const CalendarRegionSchema = T.Union([
  T.Literal("asia"),
  T.Literal("europe"),
  T.Literal("america"),
]);
export type CalendarRegion = Static<typeof CalendarRegionSchema>;

export const CalendarSelectionSchema = T.Object({
  game: GameSchema,
  calendars: T.Array(T.String(), { minItems: 1 }),
  format: CalendarFormatSchema,
  region: CalendarRegionSchema,
});
export type CalendarSelectionFormData = Static<typeof CalendarSelectionSchema>;
