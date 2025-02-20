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
    defaultValue: [calendars[0]],
  });

  const invalid = !!form.fieldState.error;

  return (
    <Fieldset.Root size="lg" invalid={invalid}>
      <CheckboxGroup
        invalid={invalid}
        value={form.field.value}
        onValueChange={form.field.onChange}
        name={form.field.name}
        gap="4"
      >
        <Fieldset.Legend>Calendars</Fieldset.Legend>

        <Fieldset.Content>
          <HStack gap="6" align="flex-start">
            {calendars.map((calendar) => (
              <Checkbox key={calendar} value={calendar}>
                {startCase(calendar)}
              </Checkbox>
            ))}
          </HStack>
        </Fieldset.Content>

        {form.fieldState.error && (
          <Fieldset.ErrorText>
            You must select at least one calendar.
          </Fieldset.ErrorText>
        )}
      </CheckboxGroup>
    </Fieldset.Root>
  );
}
