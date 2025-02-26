import { useEffect } from "react";
import { Heading, Highlight } from "@chakra-ui/react";

import type { HighlightProps } from "@chakra-ui/react";

type Props = HighlightProps & { children: string };

export function Title({ children, ...highlightProps }: Props) {
  useEffect(() => {
    document.title = `Aetherball - ${children}`;
  }, [children]);

  return (
    <Heading as="h1" size="3xl">
      <Highlight {...highlightProps}>{children}</Highlight>
    </Heading>
  );
}
