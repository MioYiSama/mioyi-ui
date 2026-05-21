import { render, screen } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import { Tabs } from "../components/tabs";

describe("Tabs", () => {
  it("resets native button styles for triggers", () => {
    render(() => (
      <Tabs.Root defaultValue="preview">
        <Tabs.List>
          <Tabs.Trigger value="preview">Preview</Tabs.Trigger>
          <Tabs.Trigger value="code">Code</Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="preview">Preview panel</Tabs.Content>
        <Tabs.Content value="code">Code panel</Tabs.Content>
      </Tabs.Root>
    ));

    const preview = screen.getByRole("tab", { name: "Preview" });
    expect(preview).toHaveClass("appearance-none");
    expect(preview).toHaveClass("border");
    expect(preview).toHaveClass("border-transparent");
    expect(preview).toHaveClass("bg-transparent");
    expect(preview).toHaveClass("text-muted-foreground");
    expect(preview).toHaveClass("enabled:hover:bg-background/70");
  });
});
