import { fireEvent, render, screen, waitFor } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import { Dialog } from "../components/dialog";

describe("Dialog", () => {
  it("opens and closes dialog content", async () => {
    render(() => (
      <Dialog.Root>
        <Dialog.Trigger>Open dialog</Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Backdrop />
          <Dialog.Positioner>
            <Dialog.Content>
              <Dialog.CloseTrigger>Close</Dialog.CloseTrigger>
              <Dialog.Title>Dialog title</Dialog.Title>
              <Dialog.Description>Dialog body</Dialog.Description>
            </Dialog.Content>
          </Dialog.Positioner>
        </Dialog.Portal>
      </Dialog.Root>
    ));

    const trigger = screen.getByRole("button", { name: "Open dialog" });

    fireEvent.click(trigger);
    const dialog = await screen.findByRole("dialog", { hidden: true });

    await waitFor(() => expect(dialog).not.toHaveAttribute("hidden"));
    expect(screen.getByText("Dialog title")).toBeInTheDocument();
    expect(trigger).toHaveAttribute("aria-expanded", "true");

    fireEvent.click(screen.getByText("Close"));
    await waitFor(() => expect(trigger).toHaveAttribute("aria-expanded", "false"));
  });
});
