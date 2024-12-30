import { Flex } from "@chakra-ui/react";

import type { PropsWithChildren } from "react";

export function Body({ children }: PropsWithChildren<unknown>) {
  return (
    <Flex as="main" width="100%" height="100%" padding={2} bg="bg.subtle">
      {children}
    </Flex>
  );
}
