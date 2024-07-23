const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern : 'cypress/e2e/AllSpecs**/*.cy.js',
     setupNodeEvents(on, config) {
      // implement node event listeners here
       
    },
  },
});
