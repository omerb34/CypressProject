/// <reference types="cypress" />

context("My Second Test", () => {
  beforeEach("her testen once caliscak blok", () => {
    cy.visit("");
  });

  it("Url Test", () => {
    cy.url().should("include", "google");
  });

  it("Title tEst", () => {
    cy.title().should("equal", "Google");
    cy.get("#APjFqb").type("ensonhaber{enter}");
  });

  it.skip("Search Test", () => {
    cy.get("#APjFqb", { timeout: 8000 }).type("ensonhaber{enter}");
  });

  it.only("Click", () => {
    cy.get(".gb_d").click;
  });
});
