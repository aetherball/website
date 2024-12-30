import type { Game, Subpath } from "@/routes";

export function getPathname(game?: Game, subpath?: Subpath<Game>) {
  if (!game) return "/";
  if (!subpath) return `/${game}`;
  return `/${game}/${subpath}`;
}
