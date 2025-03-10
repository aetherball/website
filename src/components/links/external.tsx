import { LuExternalLink } from "react-icons/lu";

import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{ to: string }>;

export default function ExternalLink({ to, children, ...otherProps }: Props) {
  return (
    <a href={to} target="_blank" referrerPolicy="no-referrer" {...otherProps}>
      {children} <LuExternalLink />
    </a>
  );
}
