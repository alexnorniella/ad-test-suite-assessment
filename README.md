# Sauce demo test suite

## Cypress test suite set up

This test suite requires node installed on your system

https://nodejs.org/en

Before running tests install with following command:

`npm install`

See below for a list of npm and commands and their uses

Open and keep cypress open for developer mode:

`npm run cy:open`

Run cypress in headless mode:

`npm run cy:run`

Run cypress test in headed mode to view tests:

`npm run cy:headed`

## Test utilities

### visitAndAttemptLogin

This function can be used at the start of each test case to first log in to the application

Use "standard_user" login to ensure successful login

E.g.

```js
cy.visitAndAttemptLogin("standard_user", "secret_sauce");
```
