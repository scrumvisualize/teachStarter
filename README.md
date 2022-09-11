1. Installed the latest cypress version 10.7.0
2. Created a cypress automation framework in Page Object Model concept, please refer POM folder
3. Relevant js functions are written under utility.js


Installation:

Please note: Relevant node and npm versions should be installed in system.

1. Navigate to the following github repo and clone the repository: https://github.com/scrumvisualize/teachStarter.git
2. Open windows terminal or bash terminal 
3. Type npm install command
4. Install all of the required libraries under node_modules folder


Tests:

1. E2E tests are written under the e2e folder
2. randomSelectedResourceItem.cy.js - e2e test case is covered as per the question is written in this file
3. unitTests.cy.js - Unit test to check the javascript function is written in this file.

Running the Cypress command:

1. Navigate to the root folder 
2. Open a terminal in bash or windows and type command: "npm run cy-test-open" - to open cypress test runner
3. Open a terminal in bash or windows and type command: "npm run cy-test-run"  - to run the cypress test in headless mode

or 

From the root folder, open a terminal and type any one of the below command
npx cypress open  
or 
npx cypress run 
or 
npx cypress run GLOB='cypress/e2e/**/*.cy.js' --browser chrome 
