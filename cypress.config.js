const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    WRONG_USERNAME: "wrong_username",
    WRONG_PASSWORD: "wrong_password"
  },
  e2e: {
    setupNodeEvents(on, config) {
      baseUrl: 'https://www.pecodesoftware.com/qa-portal'
    },
  },
});
