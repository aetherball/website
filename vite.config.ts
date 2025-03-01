import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { sentryVitePlugin } from "@sentry/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        presets: [
          [
            "jotai/babel/preset",
            { customAtomNames: ["atomWithSuspenseQuery"] },
          ],
        ],
      },
    }),
    tsconfigPaths(),
    sentryVitePlugin({
      org: "janejeon",
      project: "aetherball-frontend",
    }),
  ],
  build: {
    sourcemap: true,
  },
});
