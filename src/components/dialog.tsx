import { Dialog as ArkDialog } from "@ark-ui/solid/dialog";
import { cva } from "class-variance-authority";
import { XIcon } from "lucide-solid";
import { splitProps, type ComponentProps } from "solid-js";
import { Portal } from "solid-js/web";
import { cn } from "../lib/cn";

const dialogBackdropVariants = cva(
  "bg-foreground/45 data-[state=closed]:animate-out data-[state=open]:animate-in fixed inset-0 z-50",
);
const dialogPositionerVariants = cva(
  "fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4",
);
const dialogContentVariants = cva([
  "border-border bg-popover text-popover-foreground relative grid w-full max-w-lg gap-4 rounded-lg border p-6 shadow-lg outline-none",
  "data-[state=closed]:animate-out data-[state=open]:animate-in",
]);
const dialogTitleVariants = cva("text-lg leading-none font-semibold tracking-normal");
const dialogDescriptionVariants = cva("text-muted-foreground text-sm");
const dialogCloseTriggerVariants = cva(
  "text-muted-foreground hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring absolute top-4 right-4 inline-flex size-8 items-center justify-center rounded-sm transition-colors focus-visible:ring-2 focus-visible:outline-none [&>svg]:size-4",
);

export type DialogRootProps = ComponentProps<typeof ArkDialog.Root>;
export type DialogTriggerProps = ComponentProps<typeof ArkDialog.Trigger>;
export type DialogBackdropProps = ComponentProps<typeof ArkDialog.Backdrop>;
export type DialogPositionerProps = ComponentProps<typeof ArkDialog.Positioner>;
export type DialogContentProps = ComponentProps<typeof ArkDialog.Content>;
export type DialogTitleProps = ComponentProps<typeof ArkDialog.Title>;
export type DialogDescriptionProps = ComponentProps<typeof ArkDialog.Description>;
export type DialogCloseTriggerProps = ComponentProps<typeof ArkDialog.CloseTrigger>;

export function DialogRoot(props: DialogRootProps) {
  return <ArkDialog.Root {...props} />;
}

export function DialogTrigger(props: DialogTriggerProps) {
  return <ArkDialog.Trigger {...props} />;
}

export function DialogBackdrop(props: DialogBackdropProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkDialog.Backdrop
      class={cn(dialogBackdropVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function DialogPositioner(props: DialogPositionerProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkDialog.Positioner
      class={cn(dialogPositionerVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function DialogContent(props: DialogContentProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkDialog.Content
      class={cn(dialogContentVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function DialogTitle(props: DialogTitleProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkDialog.Title class={cn(dialogTitleVariants(), local.class)} data-mioyi-ui="" {...rest} />
  );
}

export function DialogDescription(props: DialogDescriptionProps) {
  const [local, rest] = splitProps(props, ["class"]);

  return (
    <ArkDialog.Description
      class={cn(dialogDescriptionVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    />
  );
}

export function DialogCloseTrigger(props: DialogCloseTriggerProps) {
  const [local, rest] = splitProps(props, ["children", "class"]);

  return (
    <ArkDialog.CloseTrigger
      class={cn(dialogCloseTriggerVariants(), local.class)}
      data-mioyi-ui=""
      {...rest}
    >
      {local.children ?? <XIcon aria-hidden="true" />}
    </ArkDialog.CloseTrigger>
  );
}

export function DialogPortal(props: ComponentProps<typeof Portal>) {
  return <Portal {...props} />;
}

export const Dialog = {
  Backdrop: DialogBackdrop,
  CloseTrigger: DialogCloseTrigger,
  Content: DialogContent,
  Description: DialogDescription,
  Positioner: DialogPositioner,
  Portal: DialogPortal,
  Root: DialogRoot,
  Title: DialogTitle,
  Trigger: DialogTrigger,
};
