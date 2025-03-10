import { useAtom } from "jotai";
import { ChakraProvider } from "@chakra-ui/react";
import {
  ColorModeProvider,
  type ColorModeProviderProps,
} from "@/components/ui/color-mode";
import { themeAtom } from "@/states/theme";

export function ChakraUIProvider(props: ColorModeProviderProps) {
  const [theme] = useAtom(themeAtom);

  return (
    <ChakraProvider value={theme}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
