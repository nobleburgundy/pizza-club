const xpath = require("cypress-xpath");

const postPayload = {
  restaurant: "Test Restaurant " + new Date().getUTCMilliseconds(),
  pizza: "Pepperoni " + new Date().getUTCMilliseconds(),
  description: "Best ever test " + new Date().getUTCMilliseconds(),
  style: "TEST",
  score: 1,
};

describe("API smoke test", () => {
  it("GET request test", () => {
    cy.request("http://localhost:5000/api/pizzas").then((response) => {
      expect(response.status).to;
      expect(response.body.length).to.greaterThan(0);
    });
  });
  it("GET request with RESTAURANT query", () => {
    const input = "Young Joni";
    cy.request(`http://localhost:5000/api/pizzas?restaurant=${input}`).then(
      (response) => {
        expect(response.status).to.eq(200);
        response.body.forEach((element) => {
          expect(element.restaurant).to.eq(input);
        });
      }
    );
  });
  it("GET request with SCORE query", () => {
    const score = 5;
    cy.request(`http://localhost:5000/api/pizzas?score=${score}`).then(
      (response) => {
        expect(response.status).to.eq(200);
        response.body.forEach((element) => {
          expect(element.score).to.eq(score);
        });
      }
    );
  });
  it("GET request with PIZZA query", () => {
    const pizza = "Pepperoni";
    cy.request(`http://localhost:5000/api/pizzas?pizza=${pizza}`).then(
      (response) => {
        expect(response.status).to.eq(200);
        response.body.forEach((element) => {
          expect(element.pizza).to.eq(pizza);
        });
      }
    );
  });
  it("GET request with STYLE query", () => {
    const style = "Classic";
    cy.request(`http://localhost:5000/api/pizzas?style=${style}`).then(
      (response) => {
        expect(response.status).to.eq(200);
        response.body.forEach((element) => {
          expect(element.style).to.eq(style);
        });
      }
    );
  });
  it("GET request with no results", () => {
    const xyz = "xyz";
    cy.request(`http://localhost:5000/api/pizzas?xyz=${xyz}`).then(
      (response) => {
        expect(response.status).to.eq(200);
        expect(response.body.length).to.eq(0);
      }
    );
  });
  it("POST request test", () => {
    cy.request("POST", "http://localhost:5000/api/pizzas", postPayload).then(
      (response) => {
        expect(response.status).to.eq(201);
      }
    );
  });
});

before(() => {
  cy.visit("/");
});

describe("UI Smoke Test", function() {
  it("Application opens", function() {
    cy.xpath("//h1")
      .should("be.visible")
      .and("contain", "Welcome to Pizza Club");
  });
  it("Filter Pizzas Filter Exists", function() {
    cy.xpath("//select[@id='filter-pizzas']").should("be.visible");
  });
  it("Add Pizza form should be visible", () => {
    cy.xpath("//i[@id='add-pizza-btn']").click();
    cy.xpath("//form[@id='add-pizza-form']").should("be.visible");
  });
});

const rest = new Date().getUTCMilliseconds();

describe("Add Pizza Test", () => {
  it("Add Pizza form should be visible", () => {
    cy.xpath("//i[@id='add-pizza-btn']").click();
    cy.xpath("//form[@id='add-pizza-form']").should("be.visible");
  });
  it("Fill out form", () => {
    cy.xpath("//input[@data-test-id='add-restaurant']")
      .type("Test Restaurant " + rest)
      .should("have.value", "Test Restaurant " + rest);
    cy.xpath("//input[@data-test-id='add-pizza']")
      .type("Test pizza " + rest)
      .should("have.value", "Test pizza " + rest);
    cy.xpath("//input[@data-test-id='add-description']")
      .type("Test description " + rest)
      .should("have.value", "Test description " + rest);
    cy.xpath("//input[@data-test-id='add-style']")
      .type("Test Style " + rest)
      .should("have.value", "Test Style " + rest);
    cy.xpath("//select[@data-test-id='add-score']")
      .select("4")
      .should("have.value", "4");
    cy.xpath("//input[@data-test-id='add-pizza-submit']").click();
  });
  it("New pizza should be added to grid", () => {
    cy.xpath(`//h2[contains(text(), 'Test Restaurant ${rest}')]`).should(
      "be.visible"
    );
  });
});
