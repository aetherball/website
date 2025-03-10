import { useCallback } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { useAtom } from "jotai";
import { useForm } from "react-hook-form";
// import { DevTool } from "@hookform/devtools";
import { typeboxResolver } from "@hookform/resolvers/typebox";
import { Button, Fieldset, Box } from "@chakra-ui/react";

import { gameAtom } from "@/states/navigation";
import {
  formDataAtomFamily,
  formDataDefaultValuesAtomFamily,
  isFormDirtyAtomFamily,
} from "./state";
import { CalendarSelectionSchema } from "./schema";

import CalendarsField from "./fields/calendars";
import FormatField from "./fields/format";
import RegionField from "./fields/region";

import { useAtomStrict } from "@/monads/use-strict";

import type { CalendarSelectionFormData } from "./schema";

export default function CalendarForm() {
  const game = useAtomStrict(gameAtom);
  const [defaultValues] = useAtom(formDataDefaultValuesAtomFamily(game));
  const [, setData] = useAtom(formDataAtomFamily(game));
  const [, setIsDirty] = useAtom(isFormDirtyAtomFamily(game));

  const {
    handleSubmit,
    control,
    formState: { isDirty, isValid },
    reset,
  } = useForm<CalendarSelectionFormData>({
    resolver: typeboxResolver(CalendarSelectionSchema),
    defaultValues,
    mode: "onChange",
  });

  const onSubmit = useCallback(
    (data: CalendarSelectionFormData) => {
      setData(data);

      // "Reset" the form to the new data, so that only changes to *this* data count as changes in the form.
      reset(data);
    },
    [setData, reset],
  );

  useIsomorphicLayoutEffect(() => {
    setIsDirty(isDirty);
  }, [isDirty]);

  return (
    <Box as="form" width="100%" onSubmit={handleSubmit(onSubmit)}>
      <Fieldset.Root size="lg" maxW="md">
        <Fieldset.Content gap="7">
          <CalendarsField control={control} />
          <RegionField control={control} />
          <FormatField control={control} />
        </Fieldset.Content>

        <Button
          type="submit"
          alignSelf="flex-start"
          disabled={!isDirty || !isValid}
        >
          {"Create New Calendar Link"}
        </Button>
      </Fieldset.Root>

      {/* <DevTool control={control} /> */}
    </Box>
  );
}
