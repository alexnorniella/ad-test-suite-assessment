describe("Login Page", () => {
  it("Successfully logs in for a standard user", () => {
    cy.visitAndAttemptLogin("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("Shows a warning alert message for a locked out user", () => {
    cy.visitAndAttemptLogin("locked_out_user", "secret_sauce");
    cy.contains("Epic sadface: Sorry, this user has been locked out.");
  });
});
