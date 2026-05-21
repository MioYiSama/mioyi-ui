import { Switch as ArkSwitch } from "@ark-ui/solid/switch";
import { cva, type VariantProps } from "class-variance-authority";
import { splitProps, type ComponentProps, type JSX } from "solid-js";
import { cn } from "../lib/cn";

const switchRootVariants = cva(
  "group text-foreground inline-flex items-center gap-2 text-sm data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
  {
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        lg: "gap-2.5 text-base",
        md: "gap-2 text-sm",
        sm: "gap-1.5 text-xs",
      },
    },
  },
);
const switchControlVariants = cva(
  [
    "bg-input inline-flex shrink-0 cursor-pointer items-center rounded-full border border-transparent transition-colors outline-none",
    "data-[state=checked]:bg-primary",
    "data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-background data-[focus-visible]:ring-2 data-[focus-visible]:ring-offset-2",
  ],
  {
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        lg: "h-6 w-11 p-0.5",
        md: "h-5 w-9 p-0.5",
        sm: "h-4 w-7 p-0.5",
      },
    },
  },
);
const switchThumbVariants = cva(
  "bg-background block rounded-full shadow-sm transition-transform data-[state=checked]:translate-x-full",
  {
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        lg: "size-5",
        md: "size-4",
        sm: "size-3",
      },
    },
  },
);
const switchLabelVariants = cva("leading-none select-none");

export type SwitchRootProps = ComponentProps<typeof ArkSwitch.Root> &
  VariantProps<typeof switchRootVariants>;
export type SwitchControlProps = ComponentProps<typeof ArkSwitch.Control> &
  VariantProps<typeof switchControlVariants>;
export type SwitchThumbProps = ComponentProps<typeof ArkSwitch.Thumb> &
  VariantProps<typeof switchThumbVariants>;
export type SwitchLabelProps = ComponentProps<typeof ArkSwitch.Label>;
export type SwitchProps = Omit<SwitchRootProps, "children"> & {
  children?: JSX.Element;
  controlClass?: string;
  label?: JSX.Element;
  labelClass?: string;
  thumbClass?: string;
};

export function SwitchRoot(props: SwitchRootProps) {
  const [local, rest] = splitProps(props, ["class", "size"]);

  return (
    <ArkSwitch.Root
      class={cn(switchRootVariants({ size: local.size }), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function SwitchControl(props: SwitchControlProps) {
  const [local, rest] = splitProps(props, ["class", "size"]);

  return (
    <ArkSwitch.Control
      class={cn(switchControlVariants({ size: local.size }), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function SwitchThumb(props: SwitchThumbProps) {
  const [local, rest] = splitProps(props, ["class", "size"]);

  return (
    <ArkSwitch.Thumb
      class={cn(switchThumbVariants({ size: local.size }), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function SwitchLabel(props: SwitchLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkSwitch.Label class={cn(switchLabelVariants(), local.class)} data-mioyi-ui="" {...rest} />
  );
}

export function SwitchField(props: SwitchProps) {
  const [local, rest] = splitProps(props, [
    "children",
    "class",
    "controlClass",
    "label",
    "labelClass",
    "size",
    "thumbClass",
  ]);

  return (
    <SwitchRoot class={local.class} size={local.size} {...rest}>
      <SwitchControl class={local.controlClass} size={local.size}>
        <SwitchThumb class={local.thumbClass} size={local.size} />
      </SwitchControl>
      {local.label ? <SwitchLabel class={local.labelClass}>{local.label}</SwitchLabel> : null}
      {local.children}
      <ArkSwitch.HiddenInput />
    </SwitchRoot>
  );
}

export const Switch = Object.assign(SwitchField, {
  Control: SwitchControl,
  HiddenInput: ArkSwitch.HiddenInput,
  Label: SwitchLabel,
  Root: SwitchRoot,
  Thumb: SwitchThumb,
});
