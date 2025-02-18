import { useAtom } from "jotai";
import { useController } from "react-hook-form";
import { HStack, CheckboxGroup, Fieldset } from "@chakra-ui/react";
import startCase from "lodash/startCase";

import { Checkbox } from "@/components/ui/checkbox";
import { supportedCalendarsAtom } from "@/queries/calendars";

import type { FieldProps } from "../types";

export default function CalendarsField({ control }: FieldProps) {
  const [{ data: calendars }] = useAtom(supportedCalendarsAtom);

  const form = useController({
    control,
    name: "calendars",
    defaultValue: [calendars[0]],
  });

  const invalid = !!form.fieldState.error;

  return (
    <Fieldset.Root invalid={invalid}>
      <Fieldset.Legend>Select Calendars</Fieldset.Legend>

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
                {startCase(calendar)}
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
    </Fieldset.Root>
  );
}
