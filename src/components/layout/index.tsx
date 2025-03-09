import { NavBar } from "../nav/bar";
import { Body } from "./body";

import type { PropsWithChildren } from "react";

export default function Layout({ children }: PropsWithChildren<unknown>) {
  return (
    <>
      <NavBar />
      <Body>{children}</Body>
    </>
  );
}
