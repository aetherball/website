import { Highlight, Text, Em, Separator } from "@chakra-ui/react";

import { Title } from "@/components/layout/title";
import { Description } from "@/components/layout/description";
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
      <Title>
        <Highlight query="Events Calendar" styles={{ color: "teal.solid" }}>
          {getTitle(game)}
        </Highlight>
      </Title>
      <Description>{getDescription(game)}</Description>
      <CharacterQuote
        character="Dr. Ratio"
        imgUrl="/hsr/stickers/dr-ratio/pillar.webp"
        quote={
          <Text>
            No need to rush. Patience <Em>breeds</Em> success.
          </Text>
        }
      />
      <Separator />
      <CalendarPageBody game={game} />
    </>
  );
}
