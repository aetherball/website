import { Suspense } from "react";
import { Spinner, Text, VStack } from "@chakra-ui/react";

import type { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  message?: string;
}>;

export default function LazyLoad({ children, message }: Props) {
  return (
    <Suspense
      fallback={
        <VStack colorPalette="teal">
          <Spinner color="colorPalette.600" />
          <Text color="colorPalette.600">{message ?? "Loading..."}</Text>
        </VStack>
      }
    >
      {children}
    </Suspense>
  );
}
