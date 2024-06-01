/// <reference types="vitest" />

import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    exclude:[
      ...configDefaults.exclude,
    ],
    coverage: {
      exclude:[
        ...configDefaults.exclude,
        'src/presentation/external/**/*',
        'src/presentation/**/**/**.stories.*'
      ],
      include: ['src/presentation/**/**/*'],
      provider: "v8",
      reporter: ["text", "json", "html"],
    },
    globals: true,
    environment: "jsdom",
    setupFiles: ["./tests/setup.ts"],
  },
});
