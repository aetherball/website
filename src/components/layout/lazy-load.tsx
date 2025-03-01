import { Suspense } from "react";
import { Spinner, Text, VStack } from "@chakra-ui/react";

import type { PropsWithChildren } from "react";

const Loading = () => {
  return (
    <VStack colorPalette="teal">
      <Spinner color="colorPalette.600" />
      <Text color="colorPalette.600">Loading...</Text>
    </VStack>
  );
};

export default function LazyLoad({ children }: PropsWithChildren<unknown>) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
