// Navigation states
import { atom } from "jotai";
import { atomWithLocation } from "jotai-location";
import { atomEffect } from "jotai-effect";

export const locationAtom = atomWithLocation({
  replace: true,
});

// /:game route matching, derived from the location
export type Game = "hsr" | "zzz";
export const gameAtom = atom<Game | null>((get) => {
  const { pathname } = get(locationAtom);
  if (!pathname) return null;

  const game = pathname.split("/")[1];
  if (game === "hsr" || game === "zzz") return game;

  return null;
});

// /:game/:subpath route matching, same as above
export type Subpath = "calendar";
export const subpathAtom = atom<Subpath | null>((get) => {
  const { pathname } = get(locationAtom);
  if (!pathname) return null;

  const subpath = pathname.split("/")[2];
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
