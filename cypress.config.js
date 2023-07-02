const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://kasirdemo.belajarqa.com',
    specPattern: "cypress/e2e",
    chromeWebSecurity:false,
    defaultCommandTimeout: 10000
  }
});