const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  video: true,
  env: {
  "WRONG_PASSWORD": "wrong_password"
  },
  e2e: {
    baseUrl: 'https://www.pecodesoftware.com/qa-portal',
    testIsolation: false,
    setupNodeEvents(on, config) {
    },
  },
});
