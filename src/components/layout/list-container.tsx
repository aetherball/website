import { useRef, useState } from "react";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { Grid } from "@chakra-ui/react";

import type { BoxProps } from "@chakra-ui/react";

export default function ListContainer({ children, ...boxProps }: BoxProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [childCount, setChildCount] = useState(0);

  useIsomorphicLayoutEffect(() => {
    if (containerRef.current) {
      // Count the 'real' number of children rendered underneath this in the DOM.
      setChildCount(containerRef.current.children.length);
    }
  }, [children]);

  return (
    <Grid
      {...boxProps}
      ref={containerRef}
      width="max-content"
      gridTemplateColumns={{ base: "1fr", md: `repeat(${childCount}, 1fr)` }}
    >
      {children}
    </Grid>
  );
}
