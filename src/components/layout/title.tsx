import { Heading } from "@chakra-ui/react";

import type { PropsWithChildren } from "react";

export function Title({ children }: PropsWithChildren<unknown>) {
  return (
    <Heading as="h1" size="3xl">
      {children}
    </Heading>
  );
}
