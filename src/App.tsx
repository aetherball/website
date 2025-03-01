import { lazy } from "react";
import { useAtom } from "jotai";

import { locationAtom, routingEffect } from "./states/navigation";

import Layout from "./components/layout";
import LazyLoad from "./components/layout/lazy-load";

const HomePage = lazy(() => import("./pages/Home"));
const GamePage = lazy(() => import("./pages/:game"));
const NotFoundPage = lazy(() => import("./pages/NotFound"));

function App() {
  const [location] = useAtom(locationAtom);
  const { pathname } = location;

  useAtom(routingEffect);

  const body =
    pathname === "/" ? (
      <HomePage />
    ) : pathname === "/not-found" ? (
      <NotFoundPage />
    ) : (
      <GamePage />
    );

  return (
    <Layout>
      <LazyLoad>{body}</LazyLoad>
    </Layout>
  );
}

export default App;
