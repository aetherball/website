// Navigation states
import { atom } from "jotai";
import { atomWithLocation } from "jotai-location";
import { atomEffect } from "jotai-effect";
import { games, paths, type Game, type Subpath } from "@/routes";

export const locationAtom = atomWithLocation({
  replace: true,
});

export const pathFragmentsAtom = atom((get) => {
  const { pathname } = get(locationAtom);
  if (!pathname) return [];

  return pathname.split("/").slice(1);
});

export const breadcrumbsAtom = atom((get) => {
  const fragments = get(pathFragmentsAtom);

  return fragments.map((fragment, index) => {
    const path = "/" + fragments.slice(0, index + 1).join("/");
    const isCurrent = index === fragments.length - 1;

    return { path, fragment, isCurrent };
  });
});

// /:game route matching, derived from the location
export const gameAtom = atom<Game | null>((get) => {
  const fragments = get(pathFragmentsAtom);
  const game = fragments[0];

  if (game in games) return game as Game;
  return null;
});

// /:game/:subpath route matching, same as above
export const subpathAtom = atom<Subpath<Game> | null>((get) => {
  const game = get(gameAtom);
  if (!game) return null;

  const fragments = get(pathFragmentsAtom);
  const subpath = fragments[1];

  if (subpath in paths[game]) return subpath as Subpath<typeof game>;
  return null;
});

export const routingEffect = atomEffect((get, set) => {
  const game = get(gameAtom);
  const subpath = get(subpathAtom);

  // For now, just redirect everything to /hsr/calendar
  if (!game) set(locationAtom, { pathname: "/hsr/calendar" });
  if (!subpath) set(locationAtom, { pathname: "/hsr/calendar" });
});
