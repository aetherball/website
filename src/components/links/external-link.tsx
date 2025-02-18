import { Button } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ to: string }>;

export function ExternalLinkButton({ to, children }: Props) {
  return (
    <Button asChild width="100%">
      <a href={to} target="_blank" referrerPolicy="no-referrer">
        {children} <LuExternalLink />
      </a>
    </Button>
  );
}
