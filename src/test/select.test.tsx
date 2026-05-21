import { fireEvent, render, screen, waitFor, within } from "@solidjs/testing-library";
import { Index } from "solid-js";
import { Portal } from "solid-js/web";
import { describe, expect, it } from "vitest";
import { Select, createListCollection } from "../components/select";

describe("Select", () => {
  it("selects an item", async () => {
    const collection = createListCollection({
      items: [
        { label: "Solid", value: "solid" },
        { label: "React", value: "react" },
      ],
    });

    render(() => (
      <Select.Root collection={collection}>
        <Select.Label>Framework</Select.Label>
        <Select.Control>
          <Select.Trigger>
            <Select.ValueText placeholder="Select framework" />
          </Select.Trigger>
          <Select.Indicators>
            <Select.Indicator />
          </Select.Indicators>
        </Select.Control>
        <Portal>
          <Select.Positioner>
            <Select.Content>
              <Index each={collection.items}>
                {(item) => (
                  <Select.Item item={item()}>
                    <Select.ItemText>{item().label}</Select.ItemText>
                    <Select.ItemIndicator>✓</Select.ItemIndicator>
                  </Select.Item>
                )}
              </Index>
            </Select.Content>
          </Select.Positioner>
        </Portal>
        <Select.HiddenSelect />
      </Select.Root>
    ));

    const trigger = screen.getByRole("combobox", { name: "Framework" });

    fireEvent.click(trigger);
    const listbox = await screen.findByRole("listbox");
    const option = within(listbox).getByRole("option", { name: "Solid" });

    fireEvent.pointerDown(option);
    fireEvent.pointerUp(option);
    fireEvent.click(option);

    await waitFor(() => expect(trigger).toHaveTextContent("Solid"));
  });
});
