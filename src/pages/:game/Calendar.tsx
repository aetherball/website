import type { PropsWithChildren } from "react";
import type { Game } from "../../states/navigation";

type Props = PropsWithChildren<{ game: Game }>;

export default function CalendarPage({ game }: Props) {
  return "calendar for " + game;
}
