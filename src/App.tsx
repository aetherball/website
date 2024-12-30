import { useAtom } from "jotai";

import { locationAtom, routingEffect } from "./states/navigation";

import Layout from "./components/Layout";
import HomePage from "./pages/Home";
import GamePage from "./pages/:game";
import NotFoundPage from "./pages/NotFound";

function App() {
  const [location] = useAtom(locationAtom);
  const { pathname } = location;

  useAtom(routingEffect);

  let body = <GamePage />;
  if (pathname === "/") body = <HomePage />;
  if (pathname === "/not-found") body = <NotFoundPage />;

  return <Layout>{body}</Layout>;
}

export default App;
