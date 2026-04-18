describe("Signup1", () => {
  it("tests Signup1", () => {
    cy.viewport(1520, 737);
    cy.visit("https://portfolio-u65j.onrender.com/users/register");
    cy.get("#firstnameTextField").click();
    cy.get("#firstnameTextField").type("Jonab");
    cy.get("#lastnameTextField").click();
    cy.get("#lastnameTextField").type("T");
    cy.get("#lastnameTextField").type("Thomas");
    cy.get("#usernameTextField").click();
    cy.get("#usernameTextField").type("jonab1");
    cy.get("#emailTextField").click();
    cy.get("#emailTextField").type("jonab1@gmail.com");
    cy.get("#passwordTextField").click();
    cy.get("#passwordTextField").type("abcd1234");
    cy.get("button.btn-primary").click();
  });
});
