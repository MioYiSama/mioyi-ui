import { Tabs as ArkTabs } from "@ark-ui/solid/tabs";
import { cva, type VariantProps } from "class-variance-authority";
import { splitProps, type ComponentProps } from "solid-js";
import { cn } from "../lib/cn";

const tabsRootVariants = cva("text-foreground flex w-full flex-col gap-3");
const tabsListVariants = cva(
  "bg-muted text-muted-foreground inline-flex w-fit items-center rounded-md p-1",
);
const tabsTriggerVariants = cva(
  [
    "inline-flex items-center justify-center rounded-sm px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors outline-none",
    "data-[selected]:bg-background data-[selected]:text-foreground data-[selected]:shadow-sm",
    "data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-background data-[focus-visible]:ring-2 data-[focus-visible]:ring-offset-2",
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
  ],
  {
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        lg: "px-4 py-2 text-base",
        md: "px-3 py-1.5 text-sm",
        sm: "px-2.5 py-1 text-xs",
      },
    },
  },
);
const tabsContentVariants = cva(
  "data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-background mt-1 outline-none data-[focus-visible]:ring-2 data-[focus-visible]:ring-offset-2",
);
const tabsIndicatorVariants = cva("bg-background rounded-sm shadow-sm");

export type TabsRootProps = ComponentProps<typeof ArkTabs.Root>;
export type TabsListProps = ComponentProps<typeof ArkTabs.List>;
export type TabsTriggerProps = ComponentProps<typeof ArkTabs.Trigger> &
  VariantProps<typeof tabsTriggerVariants>;
export type TabsContentProps = ComponentProps<typeof ArkTabs.Content>;
export type TabsIndicatorProps = ComponentProps<typeof ArkTabs.Indicator>;

export function TabsRoot(props: TabsRootProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return <ArkTabs.Root class={cn(tabsRootVariants(), local.class)} data-mioyi-ui="" {...rest} />;
}

export function TabsList(props: TabsListProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return <ArkTabs.List class={cn(tabsListVariants(), local.class)} data-mioyi-ui="" {...rest} />;
}

export function TabsTrigger(props: TabsTriggerProps) {
  const [local, rest] = splitProps(props, ["class", "size"]);

  return (
    <ArkTabs.Trigger
      class={cn(tabsTriggerVariants({ size: local.size }), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function TabsContent(props: TabsContentProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkTabs.Content class={cn(tabsContentVariants(), local.class)} data-mioyi-ui="" {...rest} />
  );
}

export function TabsIndicator(props: TabsIndicatorProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkTabs.Indicator
      class={cn(tabsIndicatorVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export const Tabs = {
  Content: TabsContent,
  Indicator: TabsIndicator,
  List: TabsList,
  Root: TabsRoot,
  Trigger: TabsTrigger,
};
