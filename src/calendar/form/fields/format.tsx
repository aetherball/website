import { useController } from "react-hook-form";
import { RadioCard, HoverCard, Portal } from "@chakra-ui/react";

import MultilineText from "@/components/text/multiline";
import ListContainer from "@/components/layout/list-container";

import type { CalendarFormat } from "../schema";
import type { FieldProps } from "../types";

type FormatProps = {
  format: CalendarFormat;
  label: string;
  summary: string;
  description: string;
};

const formats: FormatProps[] = [
  {
    format: "range",
    label: "Range",
    summary: "Event from start to end",
    description: `Each in-game event corresponds to one calendar event, spanning the entire duration of the in-game event.
    Useful if you want to track what in-game events are ongoing at a given time.`,
  },
  {
    format: "point",
    label: "Point",
    summary: "Start & end events",
    description: `Each in-game event corresponds to two calendar events, one for the start and one for the end.
    Useful if you want to track (and complete) in-game events in a timely manner.`,
  },
  {
    format: "point-end",
    label: "Point (End)",
    summary: "End events only",
    description: `Each in-game event corresponds to one calendar event, only for the end.
    Useful if you just want to track upcoming deadlines.`,
  },
];

function FormatDisplay({ format, label, summary, description }: FormatProps) {
  return (
    <HoverCard.Root
      openDelay={100}
      closeDelay={100}
      positioning={{ placement: "top" }} // so that it doesn't get in the way of the button
    >
      <RadioCard.Item value={format} whiteSpace="nowrap">
        <RadioCard.ItemHiddenInput />
        <HoverCard.Trigger asChild>
          <RadioCard.ItemControl>
            <RadioCard.ItemIndicator />
            <RadioCard.ItemContent>
              <RadioCard.ItemText>{label}</RadioCard.ItemText>
              <RadioCard.ItemDescription>{summary}</RadioCard.ItemDescription>
            </RadioCard.ItemContent>
          </RadioCard.ItemControl>
        </HoverCard.Trigger>
      </RadioCard.Item>

      <Portal>
        <HoverCard.Positioner>
          <HoverCard.Content maxWidth="96">
            <HoverCard.Arrow />
            <MultilineText text={description} />
          </HoverCard.Content>
        </HoverCard.Positioner>
      </Portal>
    </HoverCard.Root>
  );
}

export default function FormatField({ control }: FieldProps) {
  const form = useController({
    control,
    name: "format",
  });

  return (
    <RadioCard.Root
      value={form.field.value}
      onValueChange={(details) => form.field.onChange(details.value)}
      name={form.field.name}
    >
      <RadioCard.Label>Event Format</RadioCard.Label>

      <ListContainer flexDirection="row" gap="2">
        {formats.map((formatProps) => (
          <FormatDisplay key={formatProps.format} {...formatProps} />
        ))}
      </ListContainer>
    </RadioCard.Root>
  );
}
