import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { Text } from "@chakra-ui/react";

type Props = {
  children: string;
};

export default function Description({ children: description }: Props) {
  useIsomorphicLayoutEffect(() => {
    let metaTag = document.querySelector<HTMLMetaElement>(
      "meta[name='description']",
    );

    if (!metaTag) {
      metaTag = document.createElement("meta");
      metaTag.name = "description";
      document.head.appendChild(metaTag);
    }

    metaTag.content = description;
  }, [description]);

  return <Text>{description}</Text>;
}
