import { defineConfig } from "cypress";

module.exports = defineConfig({
  component: {
    specPattern: "Components/**/*.{js,jsx,ts,tsx}",
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
