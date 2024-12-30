import { createListCollection } from "@chakra-ui/react";
import {
  SelectContent,
  SelectItem,
  SelectRoot,
  SelectTrigger,
  SelectValueText,
} from "@/components/ui/select";
import { games, type Game } from "@/routes";
import { gameAtom } from "@/states/navigation";
import { useAtomForSelect } from "@/monads/select";

const gamesCollection = createListCollection({
  items: Object.entries(games).map(([key, label]) => ({
    label,
    value: key as Game,
  })),
});

export function GamesDropdown() {
  const [value, setValue] = useAtomForSelect(gameAtom);

  return (
    <SelectRoot
      collection={gamesCollection}
      width={48}
      value={value}
      onValueChange={setValue}
    >
      <SelectTrigger>
        <SelectValueText placeholder="Select game" />
      </SelectTrigger>
      <SelectContent>
        {gamesCollection.items.map((game) => (
          <SelectItem item={game} key={game.value}>
            {game.label}
          </SelectItem>
        ))}
      </SelectContent>
    </SelectRoot>
  );
}
