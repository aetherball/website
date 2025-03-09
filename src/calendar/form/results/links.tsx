import { VStack } from "@chakra-ui/react";

import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardLabel,
  ClipboardRoot,
} from "@/components/ui/clipboard";
import { InputGroup } from "@/components/ui/input-group";
import Content from "@/components/layout/content";

import { ExternalLinkButton } from "@/components/links/external-link";

type Props = {
  link: string;
};

export default function CalendarLinks({ link }: Props) {
  return (
    <Content title="Calendar Links">
      <VStack width="max" alignItems="flex-start">
        <ExternalLinkButton
          to={`https://calendar.google.com/calendar/r?cid=${link}`}
        >
          Add to Google Calendar
        </ExternalLinkButton>

        <ExternalLinkButton to={link}>Add to Apple Calendar</ExternalLinkButton>

        <ExternalLinkButton
          to={`https://outlook.office.com/calendar/addcalendar?url=${link}&name=CalendarTODO`}
        >
          Add to Outlook
        </ExternalLinkButton>
      </VStack>

      <ClipboardRoot maxW="300px" value={link}>
        <ClipboardLabel>Calendar Subscription Link:</ClipboardLabel>
        <InputGroup width="full" endElement={<ClipboardIconButton me="-2" />}>
          <ClipboardInput />
        </InputGroup>
      </ClipboardRoot>
    </Content>
  );
}
