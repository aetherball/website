import { useCallback } from "react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { typeboxResolver } from "@hookform/resolvers/typebox";
import { DevTool } from "@hookform/devtools";
import { VStack, Button, Box } from "@chakra-ui/react";

import { gameAtom } from "@/states/navigation";
import { formDataAtomFamily } from "./state";
import { CalendarSelectionSchema } from "./schema";
import CalendarsField from "./fields/calendars";
import FormatField from "./fields/format";
import RegionField from "./fields/region";
import CalendarLink from "./preview";

import type { CalendarSelectionFormData } from "./schema";

export default function CalendarForm() {
  const [game] = useAtom(gameAtom);
  const [, setData] = useAtom(formDataAtomFamily(game!));

  const {
    handleSubmit,
    control,
    formState: { isDirty, isSubmitted },
    reset,
  } = useForm({
    resolver: typeboxResolver(CalendarSelectionSchema),
    defaultValues: {
      game: game!,
    },
  });

  const onSubmit = useCallback(
    (data: CalendarSelectionFormData) => {
      setData(data);
      reset(data);
    },
    [setData, reset],
  );

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)} paddingTop="4">
      <VStack alignItems="flex-start">
        <VStack alignItems="flex-start" gap="12">
          <CalendarsField control={control} />
          <RegionField control={control} />
          <FormatField control={control} />
        </VStack>

        <Button type="submit" disabled={!isDirty}>
          {"Create New Calendar Links"}
        </Button>

        {isSubmitted && !isDirty && <CalendarLink />}

        <DevTool control={control} />
      </VStack>
    </Box>
  );
}
