describe("Smoke Test 1", function() {
  it("Application opens", function() {
    cy.visit("/");
    cy.get("h1")
      .should("be.visible")
      .and("contain", "Welcome to Pizza Club");
  });

  it("Filter Pizzas Filter Exists", function() {
    cy.visit("/")
      .get("#filter-pizzas")
      .should("be.visible");
  });
});
