import { defineConfig } from "cypress";

module.exports = defineConfig({
  component: {
    specPattern: "component/**/*.{js,jsx,ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
