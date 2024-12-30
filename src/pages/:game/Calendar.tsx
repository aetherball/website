import { Highlight } from "@chakra-ui/react";
import { Title } from "@/components/layout/title";
import { Description } from "@/components/layout/description";
import { games } from "@/routes";

import type { PropsWithChildren } from "react";
import type { Game } from "@/routes";

type Props = PropsWithChildren<{ game: Game }>;

const getTitle = (game: Game) => `${games[game]} Events Calendar`;
const getDescription = (game: Game) =>
  game === "hsr"
    ? "Keep track of all the upcoming limited-time events, endgame content, and banners - right from your calendar!"
    : "Keep track of all the upcoming limited-time events and endgame content deadlines - right from your calendar!";

export default function CalendarPage({ game }: Props) {
  // TODO: form for selecting calendars, form for selecting calendar formats, preview calendar, calendar link display
  return (
    <>
      <Title>
        <Highlight query="Events Calendar" styles={{ color: "teal.solid" }}>
          {getTitle(game)}
        </Highlight>
      </Title>
      <Description>{getDescription(game)}</Description>
    </>
  );
}
