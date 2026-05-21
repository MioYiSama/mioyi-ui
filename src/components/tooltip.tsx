import { Tooltip as ArkTooltip } from "@ark-ui/solid/tooltip";
import { cva } from "class-variance-authority";
import { splitProps, type ComponentProps } from "solid-js";
import { cn } from "../lib/cn";

const tooltipContentVariants = cva(
  "border-border bg-popover text-popover-foreground data-[state=closed]:animate-out data-[state=open]:animate-in z-50 max-w-xs rounded-md border px-3 py-1.5 text-xs shadow-md outline-none",
);
const tooltipArrowVariants = cva("[--arrow-background:var(--mioyi-popover)] [--arrow-size:8px]");
const tooltipArrowTipVariants = cva("border-border bg-popover");

export type TooltipRootProps = ComponentProps<typeof ArkTooltip.Root>;
export type TooltipTriggerProps = ComponentProps<typeof ArkTooltip.Trigger>;
export type TooltipPositionerProps = ComponentProps<typeof ArkTooltip.Positioner>;
export type TooltipContentProps = ComponentProps<typeof ArkTooltip.Content>;
export type TooltipArrowProps = ComponentProps<typeof ArkTooltip.Arrow>;
export type TooltipArrowTipProps = ComponentProps<typeof ArkTooltip.ArrowTip>;

export function TooltipRoot(props: TooltipRootProps) {
  return <ArkTooltip.Root {...props} />;
}

export function TooltipTrigger(props: TooltipTriggerProps) {
  return <ArkTooltip.Trigger {...props} />;
}

export function TooltipPositioner(props: TooltipPositionerProps) {
  return <ArkTooltip.Positioner {...props} />;
}

export function TooltipContent(props: TooltipContentProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkTooltip.Content
      class={cn(tooltipContentVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function TooltipArrow(props: TooltipArrowProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkTooltip.Arrow class={cn(tooltipArrowVariants(), local.class)} data-mioyi-ui="" {...rest} />
  );
}

export function TooltipArrowTip(props: TooltipArrowTipProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkTooltip.ArrowTip
      class={cn(tooltipArrowTipVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export const Tooltip = {
  Arrow: TooltipArrow,
  ArrowTip: TooltipArrowTip,
  Content: TooltipContent,
  Positioner: TooltipPositioner,
  Root: TooltipRoot,
  Trigger: TooltipTrigger,
};
