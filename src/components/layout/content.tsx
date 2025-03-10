import { Container, Heading, Separator } from "@chakra-ui/react";

import type { ContainerProps } from "@chakra-ui/react";

type Props = ContainerProps & {
  title: string;
  topLevel?: boolean;
};

export default function Content({
  children,
  title,
  topLevel,
  ...containerProps
}: Props) {
  return (
    <Container
      {...containerProps}
      {...(topLevel
        ? {
            marginX: "0",
            marginBottom: "0",
            marginTop: "2",
          }
        : {
            marginX: "-2",
            marginBottom: "-2",
          })}
      backgroundColor="bg.subtle"
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
