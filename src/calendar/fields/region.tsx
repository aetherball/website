import { useController } from "react-hook-form";
import { Fieldset } from "@chakra-ui/react";

import { Radio, RadioGroup } from "@/components/ui/radio";

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
    defaultValue: regions[0].region,
  });

  return (
    <Fieldset.Root size="lg">
      <RadioGroup
        value={form.field.value}
        onValueChange={(details) => form.field.onChange(details.value)}
        name={form.field.name}
      >
        <Fieldset.Legend>Select Server Region</Fieldset.Legend>

        <Fieldset.Content paddingTop="4">
          {regions.map(({ region, label }) => (
            <Radio key={region} value={region}>
              {label}
            </Radio>
          ))}
        </Fieldset.Content>
      </RadioGroup>
    </Fieldset.Root>
  );
}
