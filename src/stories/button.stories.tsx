import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../components/button";

const meta = {
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg", "icon"],
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "outline", "ghost", "destructive"],
    },
  },
  args: {
    children: "Button",
    size: "md",
    variant: "default",
  },
  component: Button,
  tags: ["autodocs"],
  title: "Components/Button",
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Button } from "mioyi-ui";
import "mioyi-ui/styles.css";

export function Example() {
  return <Button>Button</Button>;
}`,
        language: "tsx",
        type: "code",
      },
    },
  },
};

export const Variants: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Button } from "mioyi-ui";
import "mioyi-ui/styles.css";

export function Example() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`,
        language: "tsx",
        type: "code",
      },
    },
  },
  render: () => (
    <div class="flex flex-wrap items-center gap-3">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  ),
};

export const Disabled: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Button } from "mioyi-ui";
import "mioyi-ui/styles.css";

export function Example() {
  return (
    <div class="flex flex-wrap items-center gap-3">
      <Button disabled>Default</Button>
      <Button disabled variant="secondary">Secondary</Button>
      <Button disabled variant="outline">Outline</Button>
      <Button disabled variant="ghost">Ghost</Button>
      <Button disabled variant="destructive">Destructive</Button>
    </div>
  );
}`,
        language: "tsx",
        type: "code",
      },
    },
  },
  render: () => (
    <div class="flex flex-wrap items-center gap-3">
      <Button disabled>Default</Button>
      <Button disabled variant="secondary">
        Secondary
      </Button>
      <Button disabled variant="outline">
        Outline
      </Button>
      <Button disabled variant="ghost">
        Ghost
      </Button>
      <Button disabled variant="destructive">
        Destructive
      </Button>
    </div>
  ),
};
