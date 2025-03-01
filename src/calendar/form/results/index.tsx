import { lazy } from "react";
import { useAtom } from "jotai";

import LazyLoad from "@/components/layout/lazy-load";
import { gameAtom } from "@/states/navigation";
import { icsLinkAtomFamily } from "./state";

import CalendarLinks from "./links";

const CalendarPreview = lazy(() => import("./preview"));

export default function CalendarFormResults() {
  const [game] = useAtom(gameAtom);
  const [link] = useAtom(icsLinkAtomFamily(game!));

  if (!link) return null;

  return (
    <>
      <CalendarLinks link={link} />
      <LazyLoad>
        <CalendarPreview link={link} />
      </LazyLoad>
    </>
  );
}
