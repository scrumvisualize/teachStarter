const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth :1920,
  viewportHeight:1080,
  video: true,
  requestTimeout:20000,
  responseTimeout: 30000,
  env:{
    USERNAME:"Test_User1",
    PASSWORD:"Test_User123",
    API_KEY: ""
  },
  e2e: {
    baseUrl:"https://www.teachstarter.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('before:browser:launch', (browser, launchOptions) => {
        console.log("Print browser name: "+browser.name);

        if (browser.name === 'chrome' || browser.name === 'chrome' && browser.isHeadless) {
            launchOptions.args.push('--disable-features=SameSiteByDefaultCookies') // bypass 401 unauthorised access on chromium-based browsers
            return launchOptions
        }

        if (browser.name === 'chrome') {
            // launch chrome using incognito
            launchOptions.args.push(' --incognito')
            return launchOptions
        }

        if (browser.name === 'chrome' && browser.isHeadless) {
            launchOptions.args.push('--disable-gpu');
            return launchOptions
        }
      });
    },
  },
});
