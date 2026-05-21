import { defineConfig } from "vitest/config";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid()],
  test: {
    css: true,
    environment: "jsdom",
    globals: true,
    server: {
      deps: {
        inline: [/@ark-ui\/solid/, /@zag-js/],
      },
    },
    setupFiles: ["./src/test/setup.ts"],
  },
});
