/// <reference types="vite/client" />

import { createDecorator, type Preview } from "storybook-solidjs-vite";
import "../src/styles.css";

const themeTokens = {
  dark: {
    "--mioyi-accent": "var(--color-cyan-950)",
    "--mioyi-accent-foreground": "var(--color-cyan-100)",
    "--mioyi-background": "var(--color-slate-950)",
    "--mioyi-border": "var(--color-slate-700)",
    "--mioyi-card": "var(--color-slate-900)",
    "--mioyi-card-foreground": "var(--color-slate-50)",
    "--mioyi-destructive": "var(--color-red-400)",
    "--mioyi-destructive-foreground": "var(--color-red-950)",
    "--mioyi-foreground": "var(--color-slate-50)",
    "--mioyi-input": "var(--color-slate-700)",
    "--mioyi-muted": "var(--color-slate-800)",
    "--mioyi-muted-foreground": "var(--color-slate-400)",
    "--mioyi-popover": "var(--color-slate-900)",
    "--mioyi-popover-foreground": "var(--color-slate-50)",
    "--mioyi-primary": "var(--color-blue-400)",
    "--mioyi-primary-foreground": "var(--color-slate-950)",
    "--mioyi-ring": "var(--color-blue-300)",
    "--mioyi-secondary": "var(--color-slate-800)",
    "--mioyi-secondary-foreground": "var(--color-slate-100)",
    "--mioyi-shadow-lg": "0 24px 52px -24px rgb(0 0 0 / 0.65)",
    "--mioyi-shadow-md": "0 12px 28px -14px rgb(0 0 0 / 0.55)",
    "--mioyi-shadow-sm": "0 1px 2px 0 rgb(0 0 0 / 0.22)",
  },
  light: {
    "--mioyi-accent": "var(--color-cyan-50)",
    "--mioyi-accent-foreground": "var(--color-slate-900)",
    "--mioyi-background": "var(--color-slate-50)",
    "--mioyi-border": "var(--color-slate-200)",
    "--mioyi-card": "var(--color-white)",
    "--mioyi-card-foreground": "var(--color-slate-950)",
    "--mioyi-destructive": "var(--color-red-600)",
    "--mioyi-destructive-foreground": "var(--color-white)",
    "--mioyi-foreground": "var(--color-slate-950)",
    "--mioyi-input": "var(--color-slate-200)",
    "--mioyi-muted": "var(--color-slate-100)",
    "--mioyi-muted-foreground": "var(--color-slate-500)",
    "--mioyi-popover": "var(--color-white)",
    "--mioyi-popover-foreground": "var(--color-slate-950)",
    "--mioyi-primary": "var(--color-blue-600)",
    "--mioyi-primary-foreground": "var(--color-white)",
    "--mioyi-ring": "var(--color-blue-500)",
    "--mioyi-secondary": "var(--color-slate-100)",
    "--mioyi-secondary-foreground": "var(--color-slate-900)",
    "--mioyi-shadow-lg": "0 20px 40px -18px rgb(15 23 42 / 0.35)",
    "--mioyi-shadow-md": "0 8px 24px -12px rgb(15 23 42 / 0.28)",
    "--mioyi-shadow-sm": "0 1px 2px 0 rgb(15 23 42 / 0.06)",
  },
} as const;

type ThemeMode = keyof typeof themeTokens;

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement;
  const tokens = themeTokens[mode];

  root.dataset.mioyiTheme = mode;
  root.style.colorScheme = mode;

  Object.entries(tokens).forEach(([name, value]) => {
    root.style.setProperty(name, value);
  });

  document.body.style.backgroundColor = "var(--mioyi-background)";
  document.body.style.color = "var(--mioyi-foreground)";
}

const withTheme = createDecorator((Story, context) => {
  applyTheme(context.globals.theme === "dark" ? "dark" : "light");

  return Story();
});

export default {
  decorators: [withTheme],
  globalTypes: {
    theme: {
      description: "Preview color scheme",
      name: "Theme",
      toolbar: {
        dynamicTitle: true,
        icon: "circlehollow",
        items: [
          { title: "Light", value: "light" },
          { title: "Dark", value: "dark" },
        ],
        title: "Theme",
      },
    },
  },
  initialGlobals: {
    theme: "light",
  },
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
