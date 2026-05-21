import { render, screen } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import { Checkbox } from "../components/checkbox";

describe("Checkbox", () => {
  it("renders a checked checkbox", () => {
    render(() => <Checkbox defaultChecked label="Accept terms" />);

    expect(screen.getByRole("checkbox", { name: "Accept terms" })).toBeChecked();
  });
});
