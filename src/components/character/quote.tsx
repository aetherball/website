import { Float } from "@chakra-ui/react";
import { Avatar } from "@/components/ui/avatar";
import { Blockquote } from "@/components/ui/blockquote";

import type { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  character: string;
  imgUrl: string;
  quote: ReactNode;
}>;

export function CharacterQuote({ character, quote, imgUrl }: Props) {
  return (
    <Blockquote
      marginLeft={8}
      ps={10}
      paddingY={2}
      icon={
        <Float placement="middle-start">
          <Avatar size="2xl" name={character} src={imgUrl} />
        </Float>
      }
      showDash
      cite={character}
      variant="plain"
    >
      {quote}
    </Blockquote>
  );
}
