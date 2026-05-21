import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Button } from "../components/button";
import { Dialog } from "../components/dialog";
import { Tabs } from "../components/tabs";
import { Tooltip } from "../components/tooltip";

const meta = {
  tags: ["autodocs"],
  title: "Components/Overlays",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const DialogExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Button, Dialog } from "mioyi-ui";
import "mioyi-ui/styles.css";

export function Example() {
  return (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>Open dialog</Button>}
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger />
            <Dialog.Title>Reusable components</Dialog.Title>
            <Dialog.Description>
              Ark UI handles behavior while mioyi-ui provides semantic styling.
            </Dialog.Description>
            <div class="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Continue</Button>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog.Root>
  );
}`,
        language: "tsx",
        type: "code",
      },
    },
  },
  render: () => (
    <Dialog.Root>
      <Dialog.Trigger
        asChild={(triggerProps) => <Button {...triggerProps()}>Open dialog</Button>}
      />
      <Dialog.Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.CloseTrigger />
            <Dialog.Title>Reusable components</Dialog.Title>
            <Dialog.Description>
              Ark UI handles behavior while mioyi-ui provides semantic styling.
            </Dialog.Description>
            <div class="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button>Continue</Button>
            </div>
          </Dialog.Content>
        </Dialog.Positioner>
      </Dialog.Portal>
    </Dialog.Root>
  ),
};

export const TabsExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Tabs } from "mioyi-ui";
import "mioyi-ui/styles.css";

export function Example() {
  return (
    <Tabs.Root defaultValue="preview" class="w-96">
      <Tabs.List>
        <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
        <Tabs.Trigger value="tokens">Tokens</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="preview" class="rounded-md border border-border p-4">
        Components use semantic CSS variables.
      </Tabs.Content>
      <Tabs.Content value="code" class="rounded-md border border-border p-4">
        Variant classes are generated with CVA.
      </Tabs.Content>
      <Tabs.Content value="tokens" class="rounded-md border border-border p-4">
        Override the --mioyi-* variables in your app.
      </Tabs.Content>
    </Tabs.Root>
  );
}`,
        language: "tsx",
        type: "code",
      },
    },
  },
  render: () => (
    <Tabs.Root defaultValue="preview" class="w-96">
      <Tabs.List>
        <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
        <Tabs.Trigger value="code">Code</Tabs.Trigger>
        <Tabs.Trigger value="tokens">Tokens</Tabs.Trigger>
      </Tabs.List>
      <Tabs.Content value="preview" class="border-border rounded-md border p-4">
        Components use semantic CSS variables.
      </Tabs.Content>
      <Tabs.Content value="code" class="border-border rounded-md border p-4">
        Variant classes are generated with CVA.
      </Tabs.Content>
      <Tabs.Content value="tokens" class="border-border rounded-md border p-4">
        Override the --mioyi-* variables in your app.
      </Tabs.Content>
    </Tabs.Root>
  ),
};

export const TooltipExample: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Button, Tooltip } from "mioyi-ui";
import "mioyi-ui/styles.css";

export function Example() {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild={(triggerProps) => <Button {...triggerProps()}>Hover me</Button>} />
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          System-color aware semantic tokens.
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  );
}`,
        language: "tsx",
        type: "code",
      },
    },
  },
  render: () => (
    <Tooltip.Root>
      <Tooltip.Trigger asChild={(triggerProps) => <Button {...triggerProps()}>Hover me</Button>} />
      <Tooltip.Positioner>
        <Tooltip.Content>
          <Tooltip.Arrow>
            <Tooltip.ArrowTip />
          </Tooltip.Arrow>
          System-color aware semantic tokens.
        </Tooltip.Content>
      </Tooltip.Positioner>
    </Tooltip.Root>
  ),
};
