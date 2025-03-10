import { ErrorBoundary } from "react-error-boundary";
import { Text } from "@chakra-ui/react";

import LazyLoad from "@/components/layout/lazy-load";
import Content from "@/components/layout/content";
import CalendarForm from "./form";
import CalendarFormResults from "./results";

import type { PropsWithChildren } from "react";
import type { Game } from "@/routes";

type Props = PropsWithChildren<{ game: Game }>;

export default function CalendarPageBody({ game }: Props) {
  return (
    <ErrorBoundary fallback={<Text color="red">Something went wrong :/</Text>}>
      <LazyLoad>
        <Content title="Calendar Options" topLevel>
          {/* We do not want to share state between games, and want the form data to 'reset' when switching games. */}
          <CalendarForm key={game} />

          <CalendarFormResults />
        </Content>
      </LazyLoad>
    </ErrorBoundary>
  );
}
