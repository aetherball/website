import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { analyzer } from "vite-bundle-analyzer";
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
    analyzer(),
    ...(process.env.SKIP_SENTRY
      ? []
      : [
          sentryVitePlugin({
            org: "janejeon",
            project: "aetherball-frontend",
            telemetry: false,
          }),
        ]),
  ],
  build: {
    sourcemap: true,
  },
});
