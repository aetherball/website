import { Button } from "@chakra-ui/react";
import { LuExternalLink } from "react-icons/lu";

import type { ButtonProps } from "@chakra-ui/react";

type Props = Omit<ButtonProps, "asChild"> & { to: string };

export function ExternalLinkButton({ to, children, ...buttonProps }: Props) {
  return (
    <Button asChild {...buttonProps}>
      <a href={to} target="_blank" referrerPolicy="no-referrer">
        {children} <LuExternalLink />
      </a>
    </Button>
  );
}
