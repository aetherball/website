import { useDocumentTitle, useIsomorphicLayoutEffect } from "usehooks-ts";
import { Heading, Highlight, Text } from "@chakra-ui/react";
import lowerFirst from "lodash/lowerFirst";

import type { HeadingProps, HighlightProps } from "@chakra-ui/react";

type Props = Omit<
  {
    title: string;
    description: string;
  } & Omit<HighlightProps, "styles"> &
    Pick<HeadingProps, "colorPalette">,
  "children"
>;

export default function Meta({
  title,
  description,
  colorPalette,
  ...highlightProps
}: Props) {
  useDocumentTitle(`Aetherball - ${title}`);

  useIsomorphicLayoutEffect(() => {
    let metaTag = document.querySelector<HTMLMetaElement>(
      "meta[name='description']",
    );

    if (!metaTag) {
      metaTag = document.createElement("meta");
      metaTag.name = "description";
      document.head.appendChild(metaTag);
    }

    metaTag.content = `${title.replace(/:/g, "")}: ${lowerFirst(description)}`;
  }, [description]);

  return (
    <>
      <Heading as="h1" size="3xl" colorPalette={colorPalette}>
        <Highlight {...highlightProps} styles={{ color: "colorPalette.solid" }}>
          {title}
        </Highlight>
      </Heading>
      <Text>{description}</Text>
    </>
  );
}
