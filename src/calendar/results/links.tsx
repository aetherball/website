import { Button } from "@chakra-ui/react";

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
import { InputGroup } from "@/components/ui/input-group";
import MultilineText from "@/components/text/multiline";
import ListContainer from "@/components/layout/list-container";
import Content from "@/components/layout/content";
import ExternalLink from "@/components/links/external";

import { useAtomStrict } from "@/monads/use-strict";
import { gameAtom } from "@/states/navigation";
import { icsLinkAtomFamily } from "./state";

const buttonConfs: {
  key: string;
  to: (link: string) => string;
  label: string;
  description: string;
}[] = [
  {
    key: "webcal",
    to: (link) => link.replace(/^https:\/\//, "webcal://"),
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

export default function CalendarLinks() {
  const game = useAtomStrict(gameAtom);
  const link = useAtomStrict(icsLinkAtomFamily(game));

  return (
    <Content title="Calendar Links">
      <ListContainer gap="2">
        {buttonConfs.map(({ key, to, label, description }) => (
          <HoverCardRoot
            key={key}
            openDelay={100}
            closeDelay={100}
            positioning={{ placement: "top" }}
          >
            <HoverCardTrigger asChild>
              <Button asChild whiteSpace="nowrap">
                <ExternalLink to={to(link)}>{label}</ExternalLink>
              </Button>
            </HoverCardTrigger>

            <HoverCardContent>
              <HoverCardArrow />
              <MultilineText text={description} />
            </HoverCardContent>
          </HoverCardRoot>
        ))}
      </ListContainer>

      <ClipboardRoot maxW="300px" value={link}>
        <ClipboardLabel>Calendar Subscription Link:</ClipboardLabel>
        <InputGroup width="full" endElement={<ClipboardIconButton me="-2" />}>
          <ClipboardInput />
        </InputGroup>
      </ClipboardRoot>
    </Content>
  );
}
