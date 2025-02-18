import { useCallback } from "react";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { typeboxResolver } from "@hookform/resolvers/typebox";
import { Button } from "@chakra-ui/react";

import { CalendarSelectionSchema } from "./schema";
import { gameAtom } from "@/states/navigation";
import CalendarsField from "./fields/calendars";
import FormatField from "./fields/format";
import RegionField from "./fields/region";

import type { CalendarSelectionFormData } from "./schema";

export default function CalendarForm() {
  const [game] = useAtom(gameAtom);

  const onSubmit = useCallback((formData: CalendarSelectionFormData) => {
    // TODO:
    console.log("form", formData);
  }, []);

  const { handleSubmit, control } = useForm({
    resolver: typeboxResolver(CalendarSelectionSchema),
    defaultValues: {
      game: game!,
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <CalendarsField control={control} />
      <FormatField control={control} />
      <RegionField control={control} />

      <Button size="sm" type="submit" alignSelf="flex-start">
        Submit
      </Button>
    </form>
  );
}
