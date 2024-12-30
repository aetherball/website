export const games = {
  hsr: "Honkai: Star Rail",
  zzz: "Zenless Zone Zero",
};
export type Game = keyof typeof games;

export const paths = {
  hsr: {
    calendar: "Events Calendar",
  },
  zzz: {
    calendar: "Events Calendar",
  },
};
export type Subpath<G extends Game> = keyof (typeof paths)[G];
