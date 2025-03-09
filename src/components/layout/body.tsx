import { VStack } from "@chakra-ui/react";

import type { PropsWithChildren } from "react";

export function Body({ children }: PropsWithChildren<unknown>) {
  return (
    <VStack
      as="main"
      width="100%"
      paddingX={16}
      paddingY={8}
      alignItems="normal"
    >
      {children}
    </VStack>
  );
}
