import "./App.css";

import { useAtom } from "jotai";

import { locationAtom, routingEffect } from "./states/navigation";

import HomePage from "./pages/Home";
import GamePage from "./pages/:game";
import NotFoundPage from "./pages/NotFound";

function App() {
  const [location] = useAtom(locationAtom);
  const { pathname } = location;

  useAtom(routingEffect);

  if (pathname === "/") return <HomePage />;
  if (pathname === "/not-found") return <NotFoundPage />;
  return <GamePage />;
}

export default App;
