// Navigation states
import { atom } from "jotai";
import { atomWithLocation } from "jotai-location";
import { atomEffect } from "jotai-effect";

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
export type Game = "hsr" | "zzz";
export const gameAtom = atom<Game | null>((get) => {
  const fragments = get(pathFragmentsAtom);

  const game = fragments[0];
  if (game === "hsr" || game === "zzz") return game;

  return null;
});

// /:game/:subpath route matching, same as above
export type Subpath = "calendar";
export const subpathAtom = atom<Subpath | null>((get) => {
  const fragments = get(pathFragmentsAtom);

  const subpath = fragments[1];
  if (subpath === "calendar") return subpath;

  return null;
});

export const routingEffect = atomEffect((get, set) => {
  const game = get(gameAtom);
  const subpath = get(subpathAtom);

  // For now, just redirect everything to /hsr/calendar
  if (!game) set(locationAtom, { pathname: "/hsr/calendar" });
  if (!subpath) set(locationAtom, { pathname: "/hsr/calendar" });
});
