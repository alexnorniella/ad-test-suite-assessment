describe("Login", () => {
  it("Visits the sauce Demo & login a standard user", () => {
    cy.visit("https://www.saucedemo.com/");
    /* locate username input
    click on the username - type username 
     locatete passsword input-click onthe password- type password 
    -locate login box button; click on the button 
    - Assert that the user is login 
    */
    cy.get('input[placeholder="Username"]').type("standard_user");
    cy.get('input[placeholder="Password"]').type("secret_sauce");
    cy.get('input[type="submit"]').click();
    cy.url().should('include', '/inventory.html')
  });
  
});
