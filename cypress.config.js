const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: 'https://www.allocine.fr/',
  },
  e2e: {
    supportFile: 'cypress/support/actions/e2e.js',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
