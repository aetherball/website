import FullCalendar from "@fullcalendar/react";
import iCalendarPlugin from "@fullcalendar/icalendar";
import dayGridPlugin from "@fullcalendar/daygrid";

import { Text } from "@chakra-ui/react";

import { Tooltip } from "@/components/ui/tooltip";

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
        bg="teal.emphasized"
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
  return (
    <div style={{ width: "100%", display: "block" }}>
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
          left: "prev,next",
          center: "title",
          right: "dayGridWeek,dayGridMonth",
        }}
      />
    </div>
  );
}
