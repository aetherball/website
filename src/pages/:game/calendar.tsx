import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Highlight, Text, Em } from "@chakra-ui/react";

import { Title } from "@/components/layout/title";
import { Description } from "@/components/layout/description";
import { CharacterQuote } from "@/components/character/quote";
import { Skeleton } from "@/components/ui/skeleton";

import { games } from "@/routes";
import CalendarForm from "@/calendar/form";
import CalendarLink from "@/calendar/link";

import type { PropsWithChildren } from "react";
import type { Game } from "@/routes";

type Props = PropsWithChildren<{ game: Game }>;

const getTitle = (game: Game) => `${games[game]} Events Calendar`;
const getDescription = (game: Game) =>
  game === "hsr"
    ? "Keep track of all upcoming limited-time events, endgame content, and banners - right from your calendar!"
    : "Keep track of all upcoming limited-time events and endgame content deadlines - right from your calendar!";

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
      <CharacterQuote
        character="Dr. Ratio"
        imgUrl="/hsr/stickers/dr-ratio/pillar.webp"
        quote={
          <Text>
            No need to rush. Patience <Em>breeds</Em> success.
          </Text>
        }
      />
      <ErrorBoundary
        fallback={<Text color="red">Something went wrong :/</Text>}
      >
        <Suspense fallback={<Skeleton height={5} flex={1} />}>
          <CalendarForm />
        </Suspense>
      </ErrorBoundary>
      <CalendarLink />
    </>
  );
}
