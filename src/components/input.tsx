import { cva, type VariantProps } from "class-variance-authority";
import { splitProps, type JSX } from "solid-js";
import { cn } from "../lib/cn";

const inputVariants = cva(
  [
    "flex w-full rounded-md border border-input bg-background text-foreground outline-none transition-colors",
    "placeholder:text-muted-foreground",
    "focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
  ],
  {
    defaultVariants: {
      invalid: false,
      size: "md",
    },
    variants: {
      invalid: {
        false: "",
        true: "border-destructive focus-visible:border-destructive focus-visible:ring-destructive/30",
      },
      size: {
        lg: "h-11 px-4 text-base",
        md: "h-10 px-3 text-sm",
        sm: "h-8 px-2.5 text-xs",
      },
    },
  },
);

export type InputProps = Omit<JSX.InputHTMLAttributes<HTMLInputElement>, "size"> &
  VariantProps<typeof inputVariants>;

export function Input(props: InputProps) {
  const [local, rest] = splitProps(props, ["class", "invalid", "size"]);
  const ariaInvalid = local.invalid ? true : rest["aria-invalid"];

  return (
    <input
      aria-invalid={ariaInvalid}
      class={cn(inputVariants({ invalid: local.invalid, size: local.size }), local.class)}
      data-invalid={local.invalid ? "" : undefined}
      data-mioyi-ui=""
      {...rest}
    />
  );
}
