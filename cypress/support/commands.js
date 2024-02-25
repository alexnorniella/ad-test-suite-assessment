Cypress.Commands.add("visitAndAttemptLogin", (username, password) => {
  cy.visit("https://www.saucedemo.com/");
  cy.get('input[placeholder="Username"]').type(username);
  cy.get('input[placeholder="Password"]').type(password);
  cy.get('input[type="submit"]').click();
});
