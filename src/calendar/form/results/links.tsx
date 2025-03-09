import { Wrap } from "@chakra-ui/react";

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

const BUTTON_SIZE = "56" as const;

export default function CalendarLinks({ link }: Props) {
  return (
    <Content title="Calendar Links">
      <Wrap gap="2">
        <ExternalLinkButton
          to={`https://calendar.google.com/calendar/r?cid=${link}`}
          width={BUTTON_SIZE}
        >
          Add to Google Calendar
        </ExternalLinkButton>

        <ExternalLinkButton to={link} width={BUTTON_SIZE}>
          Add to Apple Calendar
        </ExternalLinkButton>

        <ExternalLinkButton
          to={`https://outlook.office.com/calendar/addcalendar?url=${link}&name=CalendarTODO`}
          width={BUTTON_SIZE}
        >
          Add to Outlook
        </ExternalLinkButton>
      </Wrap>

      <ClipboardRoot maxW="300px" value={link}>
        <ClipboardLabel>Calendar Subscription Link:</ClipboardLabel>
        <InputGroup width="full" endElement={<ClipboardIconButton me="-2" />}>
          <ClipboardInput />
        </InputGroup>
      </ClipboardRoot>
    </Content>
  );
}
