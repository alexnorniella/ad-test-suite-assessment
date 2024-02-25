describe("Login", () => {
  it("Visits the sauce Demo & login a standard user", () => {
    cy.visitAndAttemptLogin("standard_user", "secret_sauce");
    cy.url().should("include", "/inventory.html");
  });

  it("Visits the sauce Demo & login a locked out user", () => {
    cy.visitAndAttemptLogin("locked_out_user", "secret_sauce");
    cy.contains("Epic sadface: Sorry, this user has been locked out.");
  });
});
