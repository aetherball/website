import { useAtom } from "jotai";
import { useController } from "react-hook-form";
import { HStack, CheckboxGroup, Field } from "@chakra-ui/react";
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
    <Field.Root invalid={invalid}>
      <Field.Label>Select Calendars</Field.Label>

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

      {form.fieldState.error && (
        <Field.ErrorText>
          You must select at least one calendar.
        </Field.ErrorText>
      )}
    </Field.Root>
  );
}
