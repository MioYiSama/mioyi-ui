import { defineConfig } from "vitest/config";
import solid from "vite-plugin-solid";

export default defineConfig({
  plugins: [solid({ hot: false })],
  test: {
    setupFiles: ["./src/test/setup.ts"],
    environment: "jsdom",
    css: true,
    globals: true,
    server: {
      deps: {
        inline: [/@ark-ui\/solid/, /@zag-js/],
      },
    },
  },
});
