import { Wrap } from "@chakra-ui/react";

import {
  ClipboardIconButton,
  ClipboardInput,
  ClipboardLabel,
  ClipboardRoot,
} from "@/components/ui/clipboard";
import {
  HoverCardArrow,
  HoverCardContent,
  HoverCardRoot,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import MultilineText from "@/components/text/multiline";
import { InputGroup } from "@/components/ui/input-group";
import Content from "@/components/layout/content";

import { ExternalLinkButton } from "@/components/links/external-link";

type Props = {
  link: string;
};

const buttonConfs: {
  key: string;
  to: (link: string) => string;
  label: string;
  description: string;
}[] = [
  {
    key: "webcal",
    to: (link) => `webcal://${link}`,
    label: "Add to Calendar (Default)",
    description:
      "Should work for most calendar apps, including Apple Calendar, Microsoft Outlook, Windows 10/11 Calendar, Mozilla Thunderbird, Nextcloud Calendar, and more.",
  },
  {
    key: "gcal-web",
    to: () => "https://calendar.google.com/calendar/u/0/r/settings/addbyurl",
    label: "Add to Google Calendar",
    description: `For Google Calendar users, you will have to add the calendar subscription manually.
      You should first copy the URL below, and then click this button to paste it in Google Calendar's web interface.`,
  },
];

export default function CalendarLinks({ link }: Props) {
  return (
    <Content title="Calendar Links">
      <Wrap gap="2">
        {buttonConfs.map(({ key, to, label, description }) => (
          <HoverCardRoot
            key={key}
            openDelay={100}
            closeDelay={100}
            positioning={{ placement: "top" }}
          >
            <HoverCardTrigger border="none" asChild>
              <ExternalLinkButton to={to(link)} width="56">
                {label}
              </ExternalLinkButton>
            </HoverCardTrigger>

            <HoverCardContent>
              <HoverCardArrow />
              <MultilineText text={description} />
            </HoverCardContent>
          </HoverCardRoot>
        ))}
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
