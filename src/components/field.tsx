import { Field as ArkField } from "@ark-ui/solid/field";
import { cva, type VariantProps } from "class-variance-authority";
import { splitProps, type ComponentProps } from "solid-js";
import { cn } from "../lib/cn";

const fieldRootVariants = cva("flex w-full flex-col gap-1.5 text-foreground", {
  defaultVariants: {
    layout: "vertical",
  },
  variants: {
    layout: {
      horizontal: "grid items-start gap-x-4 sm:grid-cols-[12rem_1fr]",
      vertical: "",
    },
  },
});

const fieldLabelVariants = cva(
  "text-sm font-medium leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
);

const fieldHelperTextVariants = cva("text-sm text-muted-foreground");
const fieldErrorTextVariants = cva("text-sm font-medium text-destructive");
const fieldRequiredIndicatorVariants = cva("text-destructive");

export type FieldRootProps = ComponentProps<typeof ArkField.Root> &
  VariantProps<typeof fieldRootVariants>;
export type FieldLabelProps = ComponentProps<typeof ArkField.Label>;
export type FieldHelperTextProps = ComponentProps<typeof ArkField.HelperText>;
export type FieldErrorTextProps = ComponentProps<typeof ArkField.ErrorText>;
export type FieldRequiredIndicatorProps = ComponentProps<typeof ArkField.RequiredIndicator>;

export function FieldRoot(props: FieldRootProps) {
  const [local, rest] = splitProps(props, ["class", "layout"]);

  return (
    <ArkField.Root
      class={cn(fieldRootVariants({ layout: local.layout }), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function FieldLabel(props: FieldLabelProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkField.Label class={cn(fieldLabelVariants(), local.class)} data-mioyi-ui="" {...rest} />
  );
}

export function FieldHelperText(props: FieldHelperTextProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkField.HelperText
      class={cn(fieldHelperTextVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function FieldErrorText(props: FieldErrorTextProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkField.ErrorText
      class={cn(fieldErrorTextVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function FieldRequiredIndicator(props: FieldRequiredIndicatorProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkField.RequiredIndicator
      class={cn(fieldRequiredIndicatorVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export const Field = {
  ErrorText: FieldErrorText,
  HelperText: FieldHelperText,
  Label: FieldLabel,
  RequiredIndicator: FieldRequiredIndicator,
  Root: FieldRoot,
};
