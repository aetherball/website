import { Flex } from "@chakra-ui/react";

import { ColorModeButton } from "../ui/color-mode";
import { NavLocation } from "./location";
import { Spacer } from "../ui/spacer";

export function NavBar() {
  return (
    <Flex as="nav" placeItems="center" wrap="wrap" padding={2} bg="bg.muted">
      <NavLocation />
      <Spacer />
      <ColorModeButton />
    </Flex>
  );
}
