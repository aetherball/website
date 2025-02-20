import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Text } from "@chakra-ui/react";

import { Skeleton } from "@/components/ui/skeleton";
import CalendarForm from "./form";

import type { PropsWithChildren } from "react";
import type { Game } from "@/routes";

type Props = PropsWithChildren<{ game: Game }>;

export default function CalendarPageBody({ game }: Props) {
  return (
    <ErrorBoundary fallback={<Text color="red">Something went wrong :/</Text>}>
      <Suspense fallback={<Skeleton height={5} flex={1} />}>
        {/* We do not want to share state between games, and want the form data to 'reset' when switching games. */}
        <CalendarForm key={game} />
      </Suspense>
    </ErrorBoundary>
  );
}
