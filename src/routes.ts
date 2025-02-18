import { Type as T, type Static } from "@sinclair/typebox";

export const GameSchema = T.Union([T.Literal("hsr"), T.Literal("zzz")]);
export type Game = Static<typeof GameSchema>;

export const games: Record<Game, string> = {
  hsr: "Honkai: Star Rail",
  zzz: "Zenless Zone Zero",
};

export const paths: Record<Game, Record<string, string>> = {
  hsr: {
    calendar: "Events Calendar",
  },
  zzz: {
    calendar: "Events Calendar",
  },
};
export type Subpath<G extends Game> = keyof (typeof paths)[G];
