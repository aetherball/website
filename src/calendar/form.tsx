import { useCallback } from "react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { typeboxResolver } from "@hookform/resolvers/typebox";
import { DevTool } from "@hookform/devtools";
import { VStack, Button } from "@chakra-ui/react";

import { gameAtom } from "@/states/navigation";
import { calendarSelectionFormDataAtom } from "./state";
import { CalendarSelectionSchema } from "./schema";
import CalendarsField from "./fields/calendars";
import FormatField from "./fields/format";
import RegionField from "./fields/region";

import type { CalendarSelectionFormData } from "./schema";

export default function CalendarForm() {
  const [game] = useAtom(gameAtom);
  const [, setData] = useAtom(calendarSelectionFormDataAtom);

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
    <form onSubmit={handleSubmit(onSubmit)}>
      <VStack alignItems="flex-start">
        <VStack alignItems="flex-start" gap="8">
          <CalendarsField control={control} />
          <RegionField control={control} />
          <FormatField control={control} />
        </VStack>

        <Button type="submit" disabled={!isDirty}>
          {isSubmitted ? "Recreate" : "Create"}
        </Button>

        <DevTool control={control} />
      </VStack>
    </form>
  );
}
