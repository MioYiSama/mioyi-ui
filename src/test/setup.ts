import "@testing-library/jest-dom/vitest";

class TestResizeObserver {
  disconnect() {}
  observe() {}
  unobserve() {}
}

Object.defineProperty(globalThis, "ResizeObserver", {
  configurable: true,
  value: TestResizeObserver,
});

Object.defineProperty(globalThis, "PointerEvent", {
  configurable: true,
  value: MouseEvent,
});

Object.defineProperty(HTMLElement.prototype, "scrollIntoView", {
  configurable: true,
  value() {},
});

Object.defineProperty(HTMLElement.prototype, "scrollTo", {
  configurable: true,
  value() {},
});

Object.defineProperty(HTMLElement.prototype, "hasPointerCapture", {
  configurable: true,
  value() {
    return false;
  },
});

Object.defineProperty(HTMLElement.prototype, "setPointerCapture", {
  configurable: true,
  value() {},
});

Object.defineProperty(HTMLElement.prototype, "releasePointerCapture", {
  configurable: true,
  value() {},
});
