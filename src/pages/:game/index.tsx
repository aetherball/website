import { lazy } from "react";
import { useAtom } from "jotai";

import { gameAtom, subpathAtom } from "@/states/navigation";
import LazyLoad from "@/components/layout/lazy-load";

const CalendarPage = lazy(() => import("./calendar"));

export default function GamePage() {
  const [game] = useAtom(gameAtom);
  const [subpath] = useAtom(subpathAtom);

  const body =
    !game || !subpath ? null : subpath === "calendar" ? (
      <CalendarPage />
    ) : (
      "Unknown path"
    );

  return <LazyLoad>{body}</LazyLoad>;
}
