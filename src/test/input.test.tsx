import { render, screen } from "@solidjs/testing-library";
import { describe, expect, it } from "vitest";
import { Input } from "../components/input";

describe("Input", () => {
  it("marks invalid inputs with aria and destructive classes", () => {
    render(() => <Input invalid placeholder="Email" />);

    const input = screen.getByPlaceholderText("Email");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveClass("border-destructive");
  });
});
