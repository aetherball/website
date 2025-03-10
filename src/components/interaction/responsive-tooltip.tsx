import { useMediaQuery } from "usehooks-ts";

import { Tooltip } from "@/components/ui/tooltip";
import { ToggleTip } from "@/components/ui/toggle-tip";

import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  content: ReactNode;
}>;

export default function ResponsiveTooltip({ children, content }: Props) {
  const isTouchDevice = useMediaQuery("(pointer: coarse)");

  return isTouchDevice ? (
    <ToggleTip
      content={content}
      positioning={{ placement: "top" }} // on mobile, the thumb will cover everything below
      lazyMount
      unmountOnExit
    >
      {children}
    </ToggleTip>
  ) : (
    <Tooltip
      content={content}
      openDelay={100}
      closeDelay={100}
      lazyMount
      unmountOnExit
    >
      {children}
    </Tooltip>
  );
}
