const xpath = require("cypress-xpath");

const postPayload = {
  restaurant: "Test Restaurant " + new Date().getUTCMilliseconds(),
  pizza: "Pepperoni " + new Date().getUTCMilliseconds(),
  description: "Best ever test " + new Date().getUTCMilliseconds(),
  score: 5
};

describe.only("API connection test", () => {
  it("GET request to backend", () => {
    cy.request("http://localhost:5000/api/pizzas").then(response => {
      expect(response.status).to.eq(200);
      expect(response.body.length).to.greaterThan(0);
    });
  });
  it("POST request to backend", () => {
    cy.request("POST", "http://localhost:5000/api/pizzas", postPayload).then(
      response => {
        expect(response.status).to.eq(201);
      }
    );
  });
});

before(() => {
  cy.visit("/");
});

describe("Smoke Test", function() {
  it("Application opens", function() {
    cy.xpath("//h1")
      .should("be.visible")
      .and("contain", "Welcome to Pizza Club");
  });

  it("Filter Pizzas Filter Exists", function() {
    cy.xpath("//select[@id='filter-pizzas']").should("be.visible");
  });

  it("Add Pizza form should be visible", () => {
    cy.xpath("//form[@id='add-pizza-form']").should("be.visible");
  });
});

const rest = new Date().getUTCMilliseconds();

describe("Add Pizza Test", () => {
  it("Fill out form", () => {
    cy.xpath("//form[@id='add-pizza-form']")
      .scrollIntoView()
      .xpath("./input[@data-test-id='restaurant']")
      .type("Test Restaurant " + rest)
      .should("have.value", "Test Restaurant " + rest)
      .xpath("//input[@data-test-id='pizza']")
      .type("Test pizza " + rest)
      .should("have.value", "Test pizza " + rest)
      .xpath("//input[@data-test-id='description']")
      .type("Test description " + rest)
      .should("have.value", "Test description " + rest)
      .xpath("//input[@data-test-id='style']")
      .type("Test Style " + rest)
      .should("have.value", "Test Style " + rest)
      .xpath("//select[@data-test-id='score']")
      .select("4")
      .should("have.value", "4");
  });
});
