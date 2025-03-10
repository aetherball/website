import { Flex } from "@chakra-ui/react";

import { ColorModeButton } from "../ui/color-mode";
import { NavigationLinks } from "./links";
import { Spacer } from "../ui/spacer";
import { NAVBAR_HEIGHT } from "@/constants";

export function NavBar() {
  return (
    <Flex
      as="nav"
      placeItems="center"
      wrap="wrap"
      padding={2}
      backgroundColor="bg.muted"
      position="fixed"
      top={0}
      width="100%"
      height={NAVBAR_HEIGHT}
      zIndex={2}
    >
      <NavigationLinks />
      <Spacer />
      <ColorModeButton />
    </Flex>
  );
}
