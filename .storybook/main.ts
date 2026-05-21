import tailwindcss from "@tailwindcss/vite";
import type { StorybookConfig } from "storybook-solidjs-vite";
import { mergeConfig } from "vite";

export default {
  stories: ["../src/**/*.stories.@(ts|tsx|mdx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-a11y"],
  framework: {
    name: "storybook-solidjs-vite",
    options: {},
  },
  viteFinal: (config) => mergeConfig(config, { plugins: [tailwindcss()] }),
} satisfies StorybookConfig;
