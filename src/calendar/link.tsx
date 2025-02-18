import { useAtom } from "jotai";

import { gameAtom } from "@/states/navigation";
import { icsLinkAtomFamily } from "./state";

export default function CalendarLink() {
  const [game] = useAtom(gameAtom);
  const [link] = useAtom(icsLinkAtomFamily(game!));

  if (!link) return null;
  return <a href={link}>{link}</a>;
}
