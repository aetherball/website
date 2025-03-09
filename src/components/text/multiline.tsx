import { useMemo } from "react";
import { Text } from "@chakra-ui/react";

type Props = {
  text: string;
};

export default function MultilineText({ text }: Props) {
  const lines = useMemo(
    () =>
      text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean),
    [text],
  );

  return (
    <>
      {lines.map((line) => (
        <Text key={line}>{line}</Text>
      ))}
    </>
  );
}
