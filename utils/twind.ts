import { IS_BROWSER } from "$fresh/runtime.ts";
import { Configuration, apply, setup } from "twind";
export * from "twind";
export const config: Configuration = {
  darkMode: "class",
  mode: "silent",
  preflight: {
    body: apply("bg-gray-900 text-white"),
  },
};

if (IS_BROWSER) setup(config);
