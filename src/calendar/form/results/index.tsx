import { lazy, Suspense } from "react";
import { useAtom } from "jotai";
import { Spinner, Text, VStack } from "@chakra-ui/react";

import { gameAtom } from "@/states/navigation";
import { icsLinkAtomFamily } from "./state";

import CalendarLinks from "./links";

const Loading = () => {
  return (
    <VStack colorPalette="teal">
      <Spinner color="colorPalette.600" />
      <Text color="colorPalette.600">Loading...</Text>
    </VStack>
  );
};

const CalendarPreview = lazy(() => import("./preview"));

export default function CalendarFormResults() {
  const [game] = useAtom(gameAtom);
  const [link] = useAtom(icsLinkAtomFamily(game!));

  if (!link) return null;

  return (
    <Suspense fallback={<Loading />}>
      <CalendarLinks link={link} />
      <CalendarPreview link={link} />
    </Suspense>
  );
}
