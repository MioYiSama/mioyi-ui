/// <reference types="vite/client" />

import type { Preview } from "storybook-solidjs-vite";
import "../src/styles.css";

export default {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: "centered",
  },
} satisfies Preview;
