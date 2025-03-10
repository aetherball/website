import "./fullcalendar.css";

import { useMediaQuery } from "usehooks-ts";
import { useAtom } from "jotai";

import FullCalendar from "@fullcalendar/react";
import iCalendarPlugin from "@fullcalendar/icalendar";
import dayGridPlugin from "@fullcalendar/daygrid";

import { Text } from "@chakra-ui/react";

import Content from "@/components/layout/content";
import ResponsiveTooltip from "@/components/interaction/responsive-tooltip";
import { breakpointUpAtomFamily } from "@/states/theme";

import type { EventApi } from "@fullcalendar/core";

type CalendarProps = {
  link: string;
};

type EventProps = {
  event: EventApi;
};

function CalendarEvent({ event: { title } }: EventProps) {
  return (
    <ResponsiveTooltip content={title}>
      <Text
        color="fg"
        bg="teal.muted"
        cursor="pointer"
        textOverflow="ellipsis"
        overflowX="clip"
      >
        {title}
      </Text>
    </ResponsiveTooltip>
  );
}

export default function CalendarPreview({ link }: CalendarProps) {
  const [lgBreakpoint] = useAtom(breakpointUpAtomFamily("lg"));
  const [mdBreakpoint] = useAtom(breakpointUpAtomFamily("md"));

  const isLgOrUp = useMediaQuery(lgBreakpoint);
  const isMdOrUp = useMediaQuery(mdBreakpoint);

  return (
    <Content title="Calendar Preview">
      <FullCalendar
        plugins={[iCalendarPlugin, dayGridPlugin]}
        initialView="dayGridMonth"
        dayMaxEventRows
        events={{
          url: link,
          format: "ics",
        }}
        eventContent={CalendarEvent}
        eventBackgroundColor="transparent"
        eventBorderColor="transparent"
        headerToolbar={{
          left: isMdOrUp ? "prev,next" : undefined,
          center: "title",
          right: "dayGridWeek,dayGridMonth",
        }}
        height={isLgOrUp ? undefined : 800}
      />
    </Content>
  );
}
