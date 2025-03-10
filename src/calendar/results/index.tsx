import { lazy } from "react";
import { useAtom } from "jotai";

import LazyLoad from "@/components/layout/lazy-load";
import { gameAtom } from "@/states/navigation";
import { useAtomStrict } from "@/monads/use-strict";
import { shouldShowFormResultsAtomFamily } from "./state";

import CalendarLinks from "./links";

const CalendarPreview = lazy(() => import("./preview"));

export default function CalendarFormResults() {
  const game = useAtomStrict(gameAtom);
  const [shouldShow] = useAtom(shouldShowFormResultsAtomFamily(game));

  if (!shouldShow) return null;

  return (
    <>
      <CalendarLinks />
      <LazyLoad>
        <CalendarPreview />
      </LazyLoad>
    </>
  );
}
