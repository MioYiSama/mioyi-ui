import { Checkbox as ArkCheckbox } from "@ark-ui/solid/checkbox";
import { cva, type VariantProps } from "class-variance-authority";
import { CheckIcon, MinusIcon } from "lucide-solid";
import { splitProps, type ComponentProps, type JSX } from "solid-js";
import { cn } from "../lib/cn";

const checkboxRootVariants = cva(
  "group inline-flex items-center gap-2 text-sm text-foreground disabled:cursor-not-allowed data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
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

const checkboxControlVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center rounded-sm border border-input bg-background text-primary-foreground outline-none transition-colors",
    "data-[focus-visible]:ring-2 data-[focus-visible]:ring-ring data-[focus-visible]:ring-offset-2 data-[focus-visible]:ring-offset-background",
    "data-[state=checked]:border-primary data-[state=checked]:bg-primary",
    "data-[state=indeterminate]:border-primary data-[state=indeterminate]:bg-primary",
    "data-[invalid]:border-destructive",
  ],
  {
    defaultVariants: {
      size: "md",
    },
    variants: {
      size: {
        lg: "size-5 [&>svg]:size-3.5",
        md: "size-4 [&>svg]:size-3",
        sm: "size-3.5 [&>svg]:size-2.5",
      },
    },
  },
);

const checkboxIndicatorVariants = cva("flex items-center justify-center");
const checkboxLabelVariants = cva("select-none leading-none");

export type CheckboxRootProps = ComponentProps<typeof ArkCheckbox.Root> &
  VariantProps<typeof checkboxRootVariants>;
export type CheckboxControlProps = ComponentProps<typeof ArkCheckbox.Control> &
  VariantProps<typeof checkboxControlVariants>;
export type CheckboxIndicatorProps = ComponentProps<typeof ArkCheckbox.Indicator>;
export type CheckboxLabelProps = ComponentProps<typeof ArkCheckbox.Label>;
export type CheckboxHiddenInputProps = ComponentProps<typeof ArkCheckbox.HiddenInput>;
export type CheckboxProps = Omit<CheckboxRootProps, "children"> & {
  children?: JSX.Element;
  controlClass?: string;
  indicatorClass?: string;
  label?: JSX.Element;
  labelClass?: string;
};

export function CheckboxRoot(props: CheckboxRootProps) {
  const [local, rest] = splitProps(props, ["class", "size"]);

  return (
    <ArkCheckbox.Root
      class={cn(checkboxRootVariants({ size: local.size }), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function CheckboxControl(props: CheckboxControlProps) {
  const [local, rest] = splitProps(props, ["class", "size"]);

  return (
    <ArkCheckbox.Control
      class={cn(checkboxControlVariants({ size: local.size }), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function CheckboxIndicator(props: CheckboxIndicatorProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkCheckbox.Indicator
      class={cn(checkboxIndicatorVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function CheckboxLabel(props: CheckboxLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkCheckbox.Label
      class={cn(checkboxLabelVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function CheckboxField(props: CheckboxProps) {
  const [local, rest] = splitProps(props, [
    "children",
    "class",
    "controlClass",
    "indicatorClass",
    "label",
    "labelClass",
    "size",
  ]);

  return (
    <CheckboxRoot class={local.class} size={local.size} {...rest}>
      <CheckboxControl class={local.controlClass} size={local.size}>
        <CheckboxIndicator class={local.indicatorClass}>
          <CheckIcon aria-hidden="true" />
        </CheckboxIndicator>
        <CheckboxIndicator class={local.indicatorClass} indeterminate>
          <MinusIcon aria-hidden="true" />
        </CheckboxIndicator>
      </CheckboxControl>
      {local.label ? <CheckboxLabel class={local.labelClass}>{local.label}</CheckboxLabel> : null}
      {local.children}
      <ArkCheckbox.HiddenInput />
    </CheckboxRoot>
  );
}

export const Checkbox = Object.assign(CheckboxField, {
  Control: CheckboxControl,
  HiddenInput: ArkCheckbox.HiddenInput,
  Indicator: CheckboxIndicator,
  Label: CheckboxLabel,
  Root: CheckboxRoot,
});
