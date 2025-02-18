import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
import { typeboxResolver } from "@hookform/resolvers/typebox";
import { DevTool } from "@hookform/devtools";
import { Group } from "@chakra-ui/react";

import { CalendarSelectionSchema } from "./schema";
import { gameAtom } from "@/states/navigation";
import CalendarsField from "./fields/calendars";
import FormatField from "./fields/format";
import RegionField from "./fields/region";

export default function CalendarForm() {
  const [game] = useAtom(gameAtom);

  const {
    control,
    // watch,
    // formState: { isValid },
  } = useForm({
    mode: "onChange",
    resolver: typeboxResolver(CalendarSelectionSchema),
    defaultValues: {
      game: game!,
    },
  });

  return (
    <>
      <Group alignItems="flex-start" orientation="horizontal">
        <CalendarsField control={control} />
        <RegionField control={control} />
        <FormatField control={control} />
      </Group>

      <DevTool control={control} />
    </>
  );
}
