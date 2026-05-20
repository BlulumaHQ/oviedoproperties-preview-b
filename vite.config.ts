// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import fs from "node:fs";
import path from "node:path";

export default defineConfig({
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index",
      },
    },
  },
  vite: {
    plugins: [
      {
        name: "copy-server-index",
        writeBundle(options) {
          if (options.dir && path.basename(options.dir) === "server") {
            const src = path.join(options.dir, "index.js");
            const dest = path.join(options.dir, "server.js");
            if (fs.existsSync(src)) {
              fs.copyFileSync(src, dest);
            }
          }
        },
      },
    ],
  },
});
