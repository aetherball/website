import { useAtom } from "jotai";

import { gameAtom, subpathAtom } from "../../states/navigation";
import CalendarPage from "./Calendar";

export default function GamePage() {
  const [game] = useAtom(gameAtom);
  const [subpath] = useAtom(subpathAtom);

  if (!game) return null;
  if (!subpath) return null;
  if (subpath === "calendar") return <CalendarPage game={game} />;

  return "Unknown path";
}
