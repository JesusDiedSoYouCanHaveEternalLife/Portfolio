describe("EditProject", () => {
  it("tests EditProject", () => {
    cy.viewport(1536, 737);
    cy.visit("https://portfolio-u65j.onrender.com/users/signin");
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("user2@gmail.com");
    cy.get("div:nth-of-type(2) > input").type("abcd1234");
    cy.get("button").click();
    cy.get("tr:nth-of-type(1) > td:nth-of-type(3)").click();
    cy.get("tr:nth-of-type(1) > td:nth-of-type(4) path").click();
    cy.get("#titleTextField").click();
    cy.get("#titleTextField").type("Eco Landscaping JA - Edit");
    cy.get("#descriptionTextField").click();
    cy.get("#descriptionTextField").type("Landscaping website developed for a client in Jamaica.. Edit");
    cy.get("button.btn-primary > svg").click();
  });
});
