import { Center } from "@chakra-ui/react";

import type { PropsWithChildren } from "react";
import type { Game } from "@/states/navigation";

type Props = PropsWithChildren<{ game: Game }>;

export default function CalendarPage({ game }: Props) {
  return (
    <Center width="100%" height="100%">
      {"calendar for " + game}
    </Center>
  );
}
