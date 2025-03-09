import { Container, Heading, Separator } from "@chakra-ui/react";

import type { ContainerProps } from "@chakra-ui/react";

type Props = ContainerProps & {
  title: string;
  isTopLevel?: boolean;
};

export default function Content({
  children,
  title,
  isTopLevel,
  ...containerProps
}: Props) {
  return (
    <Container
      {...containerProps}
      {...(isTopLevel
        ? {
            marginX: "0",
            marginBottom: "0",
          }
        : {
            marginX: "-2",
            marginBottom: "-2",
          })}
      backgroundColor="bg.panel"
      borderColor="border.inverted"
      borderStyle="solid"
      borderWidth="medium"
      borderRadius="xl"
      padding="4"
      display="flex"
      flexDirection="column"
      gap="4"
      width="auto"
    >
      <Heading as="h2">{title}</Heading>
      <Separator />
      {children}
    </Container>
  );
}
