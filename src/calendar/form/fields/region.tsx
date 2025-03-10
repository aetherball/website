import { useController } from "react-hook-form";
import { HStack, RadioGroup, Fieldset } from "@chakra-ui/react";

import type { CalendarRegion } from "../schema";
import type { FieldProps } from "../types";

const regions: {
  region: CalendarRegion;
  label: string;
}[] = [
  {
    region: "america",
    label: "America",
  },
  {
    region: "europe",
    label: "Europe",
  },
  {
    region: "asia",
    label: "Asia (incl. TW, HK, MO)",
  },
];

export default function RegionField({ control }: FieldProps) {
  const form = useController({
    control,
    name: "region",
  });

  return (
    <Fieldset.Root>
      <Fieldset.Legend>Server Region</Fieldset.Legend>

      <Fieldset.Content marginTop="1.5">
        <RadioGroup.Root
          value={form.field.value}
          onValueChange={(details) => form.field.onChange(details.value)}
          name={form.field.name}
        >
          <HStack gap="6">
            {regions.map(({ region, label }) => (
              <RadioGroup.Item key={region} value={region}>
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{label}</RadioGroup.ItemText>
              </RadioGroup.Item>
            ))}
          </HStack>
        </RadioGroup.Root>
      </Fieldset.Content>
    </Fieldset.Root>
  );
}
