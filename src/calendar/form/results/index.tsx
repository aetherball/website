import { useAtom } from "jotai";

import { gameAtom } from "@/states/navigation";
import { icsLinkAtomFamily } from "./state";

import CalendarLinks from "./links";

export default function CalendarFormResults() {
  const [game] = useAtom(gameAtom);
  const [link] = useAtom(icsLinkAtomFamily(game!));

  if (!link) return null;

  return (
    <>
      <CalendarLinks link={link} />
    </>
  );
}
