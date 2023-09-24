/// <reference types="cypress" />

describe("Alerts", () => {
  it("Alert Test", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(1) > button").click();
    cy.get("#result").should("have.text", "You successfully clicked an alert");
    //NOT:cYPRESS ALERTLERİ OTAMATİK OLARAKN TIKLAMAKTADIR
  });

  it("Accept Alert Test", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(1) > button").click();
    cy.get(":nth-child(2) > button").click();
    cy.get("#result").should("have.text", "You clicked: Ok");
  });

  it("Dismiss Alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get(":nth-child(2) > button").click();
    cy.on("window:confirm", () => {
      return false;
    });

    cy.get("#result").should("have.text", "You clicked: Cancel");

    //not: cy.on() methodu açılan pencerelerde otomatik olarak tamamı seçer.
    //ancak biz itali tıklamak istersen return false yapmamız gerekir
  });

  it.only("Alert Text yolla", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window()
    .then(($windowsElement) => {
      cy.stub($windowsElement, 'prompt').returns('Cypress');
     
    });
     cy.get(":nth-child(3) > button").click();
     cy.get('#result').should('have.text','You entered: Cypress')
  });
});
