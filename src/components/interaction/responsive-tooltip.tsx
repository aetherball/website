import { useMediaQuery } from "usehooks-ts";

import { Tooltip } from "@/components/ui/tooltip";
import { ToggleTip } from "@/components/ui/toggle-tip";
import useGlobalOpener from "@/monads/use-global-opener";

import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  content: ReactNode;
}>;

const positioning = { placement: "top" } as const; // on mobile, the thumb will cover everything below

export default function ResponsiveTooltip({ children, content }: Props) {
  const isTouchDevice = useMediaQuery("(pointer: coarse)");
  const openerProps = useGlobalOpener();

  return isTouchDevice ? (
    <ToggleTip
      content={content}
      positioning={positioning}
      lazyMount
      unmountOnExit
      {...openerProps}
    >
      {children}
    </ToggleTip>
  ) : (
    <Tooltip
      content={content}
      positioning={positioning}
      openDelay={100}
      closeDelay={100}
      lazyMount
      unmountOnExit
      {...openerProps}
    >
      {children}
    </Tooltip>
  );
}
