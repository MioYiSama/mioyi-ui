import { cva, type VariantProps } from "class-variance-authority";
import { splitProps, type JSX } from "solid-js";
import { cn } from "../lib/cn";

const buttonVariants = cva(
  [
    "inline-flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-md border border-transparent text-sm font-medium whitespace-nowrap transition-colors outline-none",
    "focus-visible:ring-ring focus-visible:ring-offset-background focus-visible:ring-2 focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[&>svg]:size-4 [&>svg]:shrink-0",
  ],
  {
    defaultVariants: {
      size: "md",
      variant: "default",
    },
    variants: {
      size: {
        icon: "size-9 p-0",
        lg: "h-11 px-6",
        md: "h-10 px-4",
        sm: "h-8 px-3 text-xs",
      },
      variant: {
        default: "bg-primary text-primary-foreground enabled:hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground enabled:hover:bg-destructive/90",
        ghost: "text-primary enabled:hover:bg-primary/10 enabled:hover:text-primary bg-transparent",
        outline:
          "border-border text-foreground enabled:hover:bg-accent enabled:hover:text-accent-foreground bg-transparent",
        secondary: "bg-secondary text-secondary-foreground enabled:hover:bg-secondary/80",
      },
    },
  },
);

export type ButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

export function Button(props: ButtonProps) {
  const [local, rest] = splitProps(props, ["class", "size", "variant"]);

  return (
    <button
      class={cn(buttonVariants({ size: local.size, variant: local.variant }), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}
