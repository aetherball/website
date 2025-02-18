import { useAtom } from "jotai";
import { HStack, CheckboxGroup, Fieldset } from "@chakra-ui/react";
import { Checkbox } from "../ui/checkbox";

import { supportedCalendarsAtom } from "@/queries/calendars";

export default function CalendarSelection() {
  const [{ data: calendars }] = useAtom(supportedCalendarsAtom);

  return (
    <Fieldset.Root>
      <CheckboxGroup defaultValue={["react"]} name="framework">
        <Fieldset.Legend fontSize="sm" mb="2">
          Select Calendars
        </Fieldset.Legend>
        <Fieldset.Content>
          <HStack>
            {calendars.map((calendar) => (
              <Checkbox key={calendar} value={calendar}>
                {calendar}
              </Checkbox>
            ))}
          </HStack>
        </Fieldset.Content>
      </CheckboxGroup>
    </Fieldset.Root>
  );
}
