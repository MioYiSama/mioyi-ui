# mioyi-ui

Reusable Solid UI components built with Ark UI, Tailwind CSS v4, and Class Variance Authority.

## Usage

```ts
import { Button } from "mioyi-ui";
import "mioyi-ui/styles.css";
```

All colors are semantic CSS variables. Override `--mioyi-*` variables in your app to customize
the theme. Dark colors are emitted from Tailwind's `dark` variant and follow the user's system
color preference by default.

## Scripts

- `pnpm build` builds ESM, declarations, and CSS.
- `pnpm storybook` starts Storybook.
- `pnpm test` runs Vitest.
- `pnpm lint` runs oxlint.
- `pnpm format:check` checks formatting with oxfmt.
