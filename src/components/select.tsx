import {
  Select as ArkSelect,
  createListCollection,
  type CollectionItem,
  type SelectRootProps as ArkSelectRootProps,
} from "@ark-ui/solid/select";
import { cva, type VariantProps } from "class-variance-authority";
import { ChevronsUpDownIcon, XIcon } from "lucide-solid";
import { splitProps, type ComponentProps } from "solid-js";
import { cn } from "../lib/cn";

export { createListCollection };

const selectRootVariants = cva("text-foreground flex w-full flex-col gap-1.5");
const selectLabelVariants = cva("text-foreground text-sm leading-none font-medium");
const selectControlVariants = cva("relative flex w-full items-center");
const selectTriggerVariants = cva(
  [
    "border-input bg-background text-foreground flex w-full items-center justify-between gap-2 rounded-md border px-3 text-sm transition-colors outline-none",
    "data-[placeholder-shown]:text-muted-foreground",
    "data-[focus-visible]:border-ring data-[focus-visible]:ring-ring/30 data-[focus-visible]:ring-2",
    "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
    "data-[invalid]:border-destructive data-[invalid]:ring-destructive/30",
  ],
  {
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        lg: "h-11 text-base",
        md: "h-10 text-sm",
        sm: "h-8 text-xs",
      },
    },
  },
);
const selectValueTextVariants = cva("truncate pr-8");
const selectIndicatorsVariants = cva(
  "text-muted-foreground pointer-events-none absolute right-2 flex items-center gap-1",
);
const selectIconButtonVariants = cva(
  "text-muted-foreground hover:text-foreground pointer-events-auto inline-flex size-5 items-center justify-center rounded-sm transition-colors [&>svg]:size-3.5",
);
const selectContentVariants = cva([
  "border-border bg-popover text-popover-foreground z-50 max-h-72 min-w-[var(--reference-width)] overflow-hidden rounded-md border p-1 shadow-md outline-none",
  "data-[state=open]:animate-in data-[state=closed]:animate-out",
]);
const selectItemVariants = cva([
  "relative flex cursor-default items-center justify-between gap-2 rounded-sm px-2 py-1.5 text-sm outline-none select-none",
  "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  "data-[state=checked]:text-primary",
]);
const selectItemTextVariants = cva("truncate");
const selectItemIndicatorVariants = cva("inline-flex size-4 items-center justify-center");
const selectItemGroupLabelVariants = cva(
  "text-muted-foreground px-2 py-1.5 text-xs font-medium tracking-wide uppercase",
);

export type SelectRootProps<T extends CollectionItem = CollectionItem> = ArkSelectRootProps<T>;
export type SelectLabelProps = ComponentProps<typeof ArkSelect.Label>;
export type SelectControlProps = ComponentProps<typeof ArkSelect.Control>;
export type SelectTriggerProps = ComponentProps<typeof ArkSelect.Trigger> &
  VariantProps<typeof selectTriggerVariants>;
export type SelectValueTextProps = ComponentProps<typeof ArkSelect.ValueText>;
export type SelectClearTriggerProps = ComponentProps<typeof ArkSelect.ClearTrigger>;
export type SelectIndicatorProps = ComponentProps<typeof ArkSelect.Indicator>;
export type SelectPositionerProps = ComponentProps<typeof ArkSelect.Positioner>;
export type SelectContentProps = ComponentProps<typeof ArkSelect.Content>;
export type SelectItemGroupProps = ComponentProps<typeof ArkSelect.ItemGroup>;
export type SelectItemGroupLabelProps = ComponentProps<typeof ArkSelect.ItemGroupLabel>;
export type SelectItemProps = ComponentProps<typeof ArkSelect.Item>;
export type SelectItemTextProps = ComponentProps<typeof ArkSelect.ItemText>;
export type SelectItemIndicatorProps = ComponentProps<typeof ArkSelect.ItemIndicator>;
export type SelectHiddenSelectProps = ComponentProps<typeof ArkSelect.HiddenSelect>;

export function SelectRoot<T extends CollectionItem>(props: SelectRootProps<T>) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSelect.Root class={cn(selectRootVariants(), local.class)} data-mioyi-ui="" {...rest} />
  );
}

export function SelectLabel(props: SelectLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSelect.Label class={cn(selectLabelVariants(), local.class)} data-mioyi-ui="" {...rest} />
  );
}

export function SelectControl(props: SelectControlProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSelect.Control
      class={cn(selectControlVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function SelectTrigger(props: SelectTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "size"]);

  return (
    <ArkSelect.Trigger
      class={cn(selectTriggerVariants({ size: local.size }), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function SelectValueText(props: SelectValueTextProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSelect.ValueText
      class={cn(selectValueTextVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function SelectClearTrigger(props: SelectClearTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <ArkSelect.ClearTrigger
      class={cn(selectIconButtonVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    >
      {local.children ?? <XIcon aria-hidden="true" />}
    </ArkSelect.ClearTrigger>
  );
}

export function SelectIndicator(props: SelectIndicatorProps) {
  const [local, rest] = splitProps(props, ["class", "children"]);

  return (
    <ArkSelect.Indicator
      class={cn(selectIconButtonVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    >
      {local.children ?? <ChevronsUpDownIcon aria-hidden="true" />}
    </ArkSelect.Indicator>
  );
}

export function SelectIndicators(props: ComponentProps<"div">) {
  const [local, rest] = splitProps(props, ["class"]);

  return <div class={cn(selectIndicatorsVariants(), local.class)} data-mioyi-ui="" {...rest} />;
}

export function SelectPositioner(props: SelectPositionerProps) {
  return <ArkSelect.Positioner {...props} />;
}

export function SelectContent(props: SelectContentProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSelect.Content
      class={cn(selectContentVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function SelectItemGroup(props: SelectItemGroupProps) {
  return <ArkSelect.ItemGroup {...props} />;
}

export function SelectItemGroupLabel(props: SelectItemGroupLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSelect.ItemGroupLabel
      class={cn(selectItemGroupLabelVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function SelectItem(props: SelectItemProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSelect.Item class={cn(selectItemVariants(), local.class)} data-mioyi-ui="" {...rest} />
  );
}

export function SelectItemText(props: SelectItemTextProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSelect.ItemText
      class={cn(selectItemTextVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function SelectItemIndicator(props: SelectItemIndicatorProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSelect.ItemIndicator
      class={cn(selectItemIndicatorVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export const Select = {
  ClearTrigger: SelectClearTrigger,
  Content: SelectContent,
  Control: SelectControl,
  HiddenSelect: ArkSelect.HiddenSelect,
  Indicator: SelectIndicator,
  Indicators: SelectIndicators,
  Item: SelectItem,
  ItemGroup: SelectItemGroup,
  ItemGroupLabel: SelectItemGroupLabel,
  ItemIndicator: SelectItemIndicator,
  ItemText: SelectItemText,
  Label: SelectLabel,
  Positioner: SelectPositioner,
  Root: SelectRoot,
  Trigger: SelectTrigger,
  ValueText: SelectValueText,
};
