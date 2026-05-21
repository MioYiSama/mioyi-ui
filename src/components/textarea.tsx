import { cva, type VariantProps } from "class-variance-authority";
import { splitProps, type JSX } from "solid-js";
import { cn } from "../lib/cn";

const textareaVariants = cva(
  [
    "border-input bg-background text-foreground flex min-h-20 w-full rounded-md border transition-colors outline-none",
    "placeholder:text-muted-foreground",
    "focus-visible:border-ring focus-visible:ring-ring/30 focus-visible:ring-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
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
        lg: "px-4 py-3 text-base",
        md: "px-3 py-2 text-sm",
        sm: "px-2.5 py-1.5 text-xs",
      },
    },
  },
);

export type TextareaProps = JSX.TextareaHTMLAttributes<HTMLTextAreaElement> &
  VariantProps<typeof textareaVariants>;

export function Textarea(props: TextareaProps) {
  const [local, rest] = splitProps(props, ["class", "invalid", "size"]);
  const ariaInvalid = local.invalid ? true : rest["aria-invalid"];

  return (
    <textarea
      aria-invalid={ariaInvalid}
      class={cn(textareaVariants({ invalid: local.invalid, size: local.size }), local.class)}
      data-invalid={local.invalid ? "" : undefined}
      data-mioyi-ui=""
      {...rest}
    />
  );
}
