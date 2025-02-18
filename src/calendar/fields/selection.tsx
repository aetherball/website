import { useAtom } from "jotai";
import { useController } from "react-hook-form";
import { HStack, CheckboxGroup, Fieldset, Code } from "@chakra-ui/react";

import { Checkbox } from "@/components/ui/checkbox";
import { supportedCalendarsAtom } from "@/queries/calendars";

import type { Control } from "react-hook-form";
import type { CalendarSelectionFormData } from "@/calendar/schema";

type Props = {
  control: Control<CalendarSelectionFormData>;
};

export default function CalendarSelection({ control }: Props) {
  const [{ data: calendars }] = useAtom(supportedCalendarsAtom);

  const form = useController({
    control,
    name: "calendars",
    defaultValue: [calendars[0]],
  });

  const invalid = !!form.fieldState.error;

  return (
    <Fieldset.Root invalid={invalid}>
      <Fieldset.Legend fontSize="sm" mb="2">
        Select Calendars
      </Fieldset.Legend>

      <Fieldset.Content>
        <CheckboxGroup
          invalid={invalid}
          value={form.field.value}
          onValueChange={form.field.onChange}
          name={form.field.name}
        >
          <HStack>
            {calendars.map((calendar) => (
              <Checkbox key={calendar} value={calendar}>
                {calendar}
              </Checkbox>
            ))}
          </HStack>
        </CheckboxGroup>
      </Fieldset.Content>

      {form.fieldState.error && (
        <Fieldset.ErrorText>
          You must select at least one calendar.
        </Fieldset.ErrorText>
      )}

      <Code>Values: {JSON.stringify(form.field.value, null, 2)}</Code>
    </Fieldset.Root>
  );
}
