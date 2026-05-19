import type { StorybookConfig } from "@storybook/nextjs";
import { resolve } from "node:path";

const config: StorybookConfig = {
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [],
  staticDirs: ["../public"],
  webpackFinal: async (config) => {
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      "@": resolve(process.cwd(), "src"),
    };

    return config;
  },
};

export default config;
