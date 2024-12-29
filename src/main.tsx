import "jotai-devtools/styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DevTools } from "jotai-devtools";
import { Provider } from "@/components/ui/provider";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <DevTools />
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
);
