import { defineConfig } from "tsdown";

export default defineConfig({
  // 输入
  entry: ["src/index.ts"],
  deps: {
    neverBundle: ["@ark-ui/solid", "@ark-ui/solid/*", "lucide-solid", "solid-js", "solid-js/web"],
  },

  // 输出
  sourcemap: true,
  dts: true,

  // 格式
  format: ["esm"],
  minify: true,
  hash: false,
  clean: true,
  outExtensions: () => ({
    dts: ".d.ts",
    js: ".js",
  }),
});
