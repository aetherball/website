import { useAtom } from "jotai";

import { calendarLinkAtom } from "./state";

export default function CalendarLink() {
  const [link] = useAtom(calendarLinkAtom);

  if (!link) return null;
  return <a href={link}>{link}</a>;
}
