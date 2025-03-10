import { useMediaQuery } from "usehooks-ts";

import FullCalendar from "@fullcalendar/react";
import iCalendarPlugin from "@fullcalendar/icalendar";
import dayGridPlugin from "@fullcalendar/daygrid";

import { Text } from "@chakra-ui/react";

import Content from "@/components/layout/content";
import { Tooltip } from "@/components/ui/tooltip";
import { useBreakpointUp } from "@/utils/breakpoint";

type CalendarProps = {
  link: string;
};

type EventProps = {
  event: {
    title: string;
  };
};

function CalendarEvent(eventInfo: EventProps) {
  return (
    <Tooltip content={eventInfo.event.title} openDelay={100} closeDelay={100}>
      <Text
        color="fg"
        bg="teal.muted"
        cursor="pointer"
        textOverflow="ellipsis"
        overflowX="clip"
      >
        {eventInfo.event.title}
      </Text>
    </Tooltip>
  );
}

export default function CalendarPreview({ link }: CalendarProps) {
  const mdBreakpoint = useBreakpointUp("md");
  const isMdOrUp = useMediaQuery(mdBreakpoint);
  const height = isMdOrUp ? undefined : 800;

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
        height={height}
      />
    </Content>
  );
}
