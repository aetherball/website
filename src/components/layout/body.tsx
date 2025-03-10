import { VStack } from "@chakra-ui/react";

import type { PropsWithChildren } from "react";

export function Body({ children }: PropsWithChildren<unknown>) {
  return (
    <VStack
      as="main"
      width="100%"
      paddingX={{ base: 2, md: 8, lg: 16 }}
      paddingY={{ base: 2, md: 4, lg: 8 }}
      alignItems="normal"
    >
      {children}
    </VStack>
  );
}
