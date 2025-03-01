import { Flex } from "@chakra-ui/react";

import { ColorModeButton } from "../ui/color-mode";
import { NavigationLinks } from "./links";
import { Spacer } from "../ui/spacer";

export function NavBar() {
  return (
    <Flex as="nav" placeItems="center" wrap="wrap" padding={2} bg="bg.muted">
      <NavigationLinks />
      <button
        onClick={() => {
          throw new Error("This is your first error!");
        }}
      >
        Break
      </button>
      <Spacer />
      <ColorModeButton />
    </Flex>
  );
}
