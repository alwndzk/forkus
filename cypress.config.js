/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-unused-vars */
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
  video: false,
  },
});
