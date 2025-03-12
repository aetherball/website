import { Container } from "@chakra-ui/react";

import type { PropsWithChildren } from "react";

export function Body({ children }: PropsWithChildren<unknown>) {
  return (
    <Container
      as="main"
      paddingX={{ base: 2, md: 8, lg: 16 }}
      paddingY={{ base: 2, md: 4, lg: 8 }}
      alignItems="normal"
    >
      {children}
    </Container>
  );
}
