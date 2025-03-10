import { useAtom } from "jotai";
import { useController } from "react-hook-form";
import { CheckboxGroup, Fieldset, HStack } from "@chakra-ui/react";
import startCase from "lodash/startCase";

import { Checkbox } from "@/components/ui/checkbox";
import { supportedCalendarsAtom } from "@/queries/calendars";

import type { FieldProps } from "../types";

export default function CalendarsField({ control }: FieldProps) {
  const [{ data: calendars }] = useAtom(supportedCalendarsAtom);

  const form = useController({
    control,
    name: "calendars",
  });

  const invalid = !!form.fieldState.error;

  return (
    <Fieldset.Root invalid={invalid}>
      <Fieldset.Legend>Calendars</Fieldset.Legend>

      <Fieldset.Content marginTop="1.5">
        <CheckboxGroup
          invalid={invalid}
          value={form.field.value}
          onValueChange={(e) => form.field.onChange(e.sort())}
          name={form.field.name}
        >
          <HStack gap="6" align="flex-start">
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
