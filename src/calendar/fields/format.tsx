import { useController } from "react-hook-form";
import { HStack, Text, Code } from "@chakra-ui/react";

import {
  RadioCardItem,
  RadioCardLabel,
  RadioCardRoot,
} from "@/components/ui/radio-card";
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import type { CalendarFormat } from "../schema";
import type { FieldProps } from "../types";

const formats: {
  format: CalendarFormat;
  label: string;
  summary: string;
  descriptionLines: string[];
}[] = [
  {
    format: "range",
    label: "Range",
    summary: "Event spans the calendar",
    descriptionLines: [
      "Each in-game event corresponds to one calendar event, spanning the entire duration of the in-game event.",
      "Useful if you want to track what in-game events are ongoing at a given time.",
    ],
  },
  {
    format: "point",
    label: "Point",
    summary: "All-day events for the start and end",
    descriptionLines: [
      "Each in-game event corresponds to two calendar events, one for the start and one for the end.",
      "Useful if you want to track (and complete) in-game events in a timely manner.",
    ],
  },
  {
    format: "point-end",
    label: "Point (End)",
    summary: "All-day event for the end",
    descriptionLines: [
      "Each in-game event corresponds to one calendar event, only for the end.",
      "Useful if you just want to track upcoming deadlines.",
    ],
  },
];

export default function FormatField({ control }: FieldProps) {
  const form = useController({
    control,
    name: "format",
    defaultValue: formats[0].format,
  });

  return (
    <RadioCardRoot
      value={form.field.value}
      onValueChange={(details) => form.field.onChange(details.value)}
      name={form.field.name}
    >
      <RadioCardLabel>Select Calendar Format</RadioCardLabel>

      <HStack>
        {formats.map(({ format, label, summary, descriptionLines }) => (
          <HoverCardRoot key={format} size="md" openDelay={250}>
            <HoverCardTrigger asChild>
              <RadioCardItem
                value={format}
                label={label}
                description={summary}
              />
            </HoverCardTrigger>
            <HoverCardContent maxWidth="24rem" marginTop="-2">
              <HoverCardArrow />
              {descriptionLines.map((line) => (
                <Text key={line}>{line}</Text>
              ))}
            </HoverCardContent>
          </HoverCardRoot>
        ))}
      </HStack>

      <Code>Values: {JSON.stringify(form.field.value)}</Code>
    </RadioCardRoot>
  );
}
