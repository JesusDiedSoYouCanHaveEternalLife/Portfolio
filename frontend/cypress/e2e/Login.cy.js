describe("Login", () => {
  it("tests Login", () => {
    cy.viewport(1536, 737);
    cy.visit("https://portfolio-u65j.onrender.com/users/signin");
    cy.get("div:nth-of-type(1) > input").click();
    cy.get("div:nth-of-type(1) > input").type("user2@gmail.com");
    cy.get("div:nth-of-type(2) > input").type("abcd1234");
    cy.get("button").click();
  });
});
