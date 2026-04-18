describe("AddProject", () => {
  it("tests AddProject", () => {
    cy.viewport(1536, 737);
    cy.visit("https://portfolio-u65j.onrender.com/users/signin");
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("user2@gmail.com");
    cy.get("div:nth-of-type(2) > input").type("abcd1234");
    cy.get("button").click();
    cy.get("div.text-end svg").click();
    cy.get("#titleTextField").click();
    cy.get("#titleTextField").type("Test Project 4");
    cy.get("#CompletionTextField").click();
    cy.get("#CompletionTextField").type("2026-04-23");
    cy.get("#descriptionTextField").click();
    cy.get("#descriptionTextField").type("test description for project");
    cy.get("button.btn-primary > svg").click();
  });
});
