import { useAtom } from "jotai";

import {
  BreadcrumbRoot,
  BreadcrumbCurrentLink,
  BreadcrumbLink,
} from "../ui/breadcrumb";
import { breadcrumbsAtom } from "@/states/navigation";

export function NavLocation() {
  const [breadcrumbs] = useAtom(breadcrumbsAtom);

  // TODO: name mapping, menu dropdown at each level

  return (
    <BreadcrumbRoot separator="/" size="lg" marginLeft={2}>
      {breadcrumbs.map(({ path, fragment, isCurrent }, index) =>
        isCurrent ? (
          <BreadcrumbCurrentLink key={index}>{fragment}</BreadcrumbCurrentLink>
        ) : (
          <BreadcrumbLink key={index} href={path}>
            {fragment}
          </BreadcrumbLink>
        ),
      )}
    </BreadcrumbRoot>
  );
}
