import { Text, Em } from "@chakra-ui/react";

import Meta from "@/components/layout/meta";
import { CharacterQuote } from "@/components/character/quote";

import { games } from "@/routes";
import CalendarPageBody from "@/calendar";

import type { PropsWithChildren } from "react";
import type { Game } from "@/routes";

type Props = PropsWithChildren<{ game: Game }>;

const getTitle = (game: Game) => `${games[game]} Events Calendar`;
const getDescription = (game: Game) =>
  game === "hsr"
    ? "Keep track of all upcoming limited-time events, endgame content, and banners - right from your calendar!"
    : "Keep track of all upcoming limited-time events and endgame content deadlines - right from your calendar!";

export default function CalendarPage({ game }: Props) {
  return (
    <>
      <Meta
        title={getTitle(game)}
        query="Events Calendar"
        description={getDescription(game)}
        colorPalette="teal"
      />
      <CharacterQuote
        character="Dr. Ratio"
        imgUrl="/hsr/stickers/dr-ratio/pillar.webp"
        quote={
          <Text>
            No need to rush. Patience <Em>breeds</Em> success.
          </Text>
        }
      />
      <CalendarPageBody game={game} />
    </>
  );
}
