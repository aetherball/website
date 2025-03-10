import { useEffect } from "react";
import { Heading, Highlight } from "@chakra-ui/react";

import type { HeadingProps, HighlightProps } from "@chakra-ui/react";

type Props = {
  children: string;
} & Omit<HighlightProps, "styles"> &
  Pick<HeadingProps, "colorPalette">;

export default function Title({
  children: title,
  colorPalette,
  ...highlightProps
}: Props) {
  useEffect(() => {
    document.title = `Aetherball - ${title}`;
  }, [title]);

  return (
    <Heading as="h1" size="3xl" colorPalette={colorPalette}>
      <Highlight {...highlightProps} styles={{ color: "colorPalette.solid" }}>
        {title}
      </Highlight>
    </Heading>
  );
}
