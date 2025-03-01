import "./instrument.ts";

import "./index.css";
import "jotai-devtools/styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DevTools } from "jotai-devtools";
import ReactQueryProvider from "./providers/react-query.tsx";
import { Provider } from "@/components/ui/provider";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      <DevTools />
      <Provider>
        <App />
      </Provider>
    </ReactQueryProvider>
  </StrictMode>,
);
