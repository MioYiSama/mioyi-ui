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
});
