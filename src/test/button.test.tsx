import { render, screen } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import { Button } from "../components/button";

describe("Button", () => {
  it("applies CVA variants and merges override classes", () => {
    render(() => (
      <Button class="h-12" size="sm" variant="secondary">
        Save
      </Button>
    ));

    const button = screen.getByRole("button", { name: "Save" });
    expect(button).toHaveClass("bg-secondary");
    expect(button).toHaveClass("h-12");
    expect(button).not.toHaveClass("h-8");
  });

  it("uses primary colors for the ghost variant", () => {
    render(() => <Button variant="ghost">Ghost</Button>);

    const button = screen.getByRole("button", { name: "Ghost" });
    expect(button).toHaveClass("bg-transparent");
    expect(button).toHaveClass("text-primary");
    expect(button).toHaveClass("enabled:hover:bg-primary/10");
    expect(button).toHaveClass("enabled:hover:text-primary");
  });

  it("uses a transparent background for the outline variant", () => {
    render(() => <Button variant="outline">Outline</Button>);

    const button = screen.getByRole("button", { name: "Outline" });
    expect(button).toHaveClass("bg-transparent");
    expect(button).toHaveClass("border-border");
  });

  it("styles disabled buttons and gates hover styles behind enabled state", () => {
    render(() => <Button disabled>Disabled</Button>);

    const button = screen.getByRole("button", { name: "Disabled" });
    expect(button).toBeDisabled();
    expect(button).toHaveClass("disabled:cursor-not-allowed");
    expect(button).toHaveClass("disabled:opacity-50");
    expect(button).toHaveClass("enabled:hover:bg-primary/90");
    expect(button).not.toHaveClass("hover:bg-primary/90");
  });
});
