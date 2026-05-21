import type { Meta, StoryObj } from "storybook-solidjs-vite";
import { Index } from "solid-js";
import { Portal } from "solid-js/web";
import { Checkbox } from "../components/checkbox";
import { Field } from "../components/field";
import { Input } from "../components/input";
import { Select, createListCollection } from "../components/select";
import { Switch } from "../components/switch";
import { Textarea } from "../components/textarea";

const frameworks = createListCollection({
  items: [
    { label: "Solid", value: "solid" },
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ],
});

const meta = {
  tags: ["autodocs"],
  title: "Components/Form",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Fields: Story = {
  parameters: {
    docs: {
      source: {
        code: `import { Index } from "solid-js";
import { Portal } from "solid-js/web";
import {
  Checkbox,
  Field,
  Input,
  Select,
  Switch,
  Textarea,
  createListCollection,
} from "mioyi-ui";
import "mioyi-ui/styles.css";

const frameworks = createListCollection({
  items: [
    { label: "Solid", value: "solid" },
    { label: "React", value: "react" },
    { label: "Vue", value: "vue" },
    { label: "Svelte", value: "svelte" },
  ],
});

export function Example() {
  return (
    <div class="grid w-80 gap-5">
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input placeholder="mioyi@example.com" type="email" />
        <Field.HelperText>Used for account notifications.</Field.HelperText>
      </Field.Root>

      <Field.Root invalid>
        <Field.Label>Message</Field.Label>
        <Textarea invalid placeholder="Write a short note" />
        <Field.ErrorText>Message is required.</Field.ErrorText>
      </Field.Root>

      <Select.Root collection={frameworks}>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.Indicators>
            <Select.ClearTrigger />
            <Select.Indicator />
          </Select.Indicators>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup>
                <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
                <Index each={frameworks.items}>
                  {(item) => (
                    <Select.Item item={item()}>
                      <Select.ItemText>{item().label}</Select.ItemText>
                      <Select.ItemIndicator>✓</Select.ItemIndicator>
                    </Select.Item>
                  )}
                </Index>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Portal>
        <Select.HiddenSelect />
      </Select.Root>

      <div class="flex flex-col gap-3">
        <Checkbox label="Accept terms" />
        <Switch label="Enable notifications" />
      </div>
    </div>
  );
}`,
        language: "tsx",
        type: "code",
      },
    },
  },
  render: () => (
    <div class="grid w-80 gap-5">
      <Field.Root>
        <Field.Label>Email</Field.Label>
        <Input placeholder="mioyi@example.com" type="email" />
        <Field.HelperText>Used for account notifications.</Field.HelperText>
      </Field.Root>

      <Field.Root invalid>
        <Field.Label>Message</Field.Label>
        <Textarea invalid placeholder="Write a short note" />
        <Field.ErrorText>Message is required.</Field.ErrorText>
      </Field.Root>

      <Select.Root collection={frameworks}>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.Indicators>
            <Select.ClearTrigger />
            <Select.Indicator />
          </Select.Indicators>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              <Select.ItemGroup>
                <Select.ItemGroupLabel>Frameworks</Select.ItemGroupLabel>
                <Index each={frameworks.items}>
                  {(item) => (
                    <Select.Item item={item()}>
                      <Select.ItemText>{item().label}</Select.ItemText>
                      <Select.ItemIndicator>✓</Select.ItemIndicator>
                    </Select.Item>
                  )}
                </Index>
              </Select.ItemGroup>
            </Select.Content>
          </Select.Positioner>
        </Portal>
        <Select.HiddenSelect />
      </Select.Root>

      <div class="flex flex-col gap-3">
        <Checkbox label="Accept terms" />
        <Switch label="Enable notifications" />
      </div>
    </div>
  ),
};
