import "./instrument.ts";

import "./index.css";
// import "jotai-devtools/styles.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { DevTools } from "jotai-devtools";
import ReactQueryProvider from "./providers/react-query.tsx";
import { ChakraUIProvider } from "./providers/chakra-ui.tsx";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ReactQueryProvider>
      {/* <DevTools /> */}
      <ChakraUIProvider>
        <App />
      </ChakraUIProvider>
    </ReactQueryProvider>
  </StrictMode>,
);

// https://vite.dev/guide/build#load-error-handling
window.addEventListener("vite:preloadError", (e) => {
  e.preventDefault();
  window.location.reload(); // for example, refresh the page
});
