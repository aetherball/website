import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Provider } from "jotai";
import { Text } from "@chakra-ui/react";

import { Skeleton } from "@/components/ui/skeleton";
import CalendarForm from "./form";
import CalendarLink from "./form/preview";

import type { PropsWithChildren } from "react";
import type { Game } from "@/routes";

type Props = PropsWithChildren<{ game: Game }>;

export default function CalendarPageBody({ game }: Props) {
  // Key a provider by game, so that we do not share state between games.
  // This is necessary to "reset" the form data and ics link atoms when switching games.
  return (
    <Provider key={game}>
      <ErrorBoundary
        fallback={<Text color="red">Something went wrong :/</Text>}
      >
        <Suspense fallback={<Skeleton height={5} flex={1} />}>
          <CalendarForm />
        </Suspense>
      </ErrorBoundary>
      <CalendarLink />
    </Provider>
  );
}
