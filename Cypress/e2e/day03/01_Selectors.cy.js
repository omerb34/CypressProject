/// <reference types="cypress" />

describe("Slectors Exapmpe", () => {
  it.skip("CSS Selectors", () => {
    cy.visit("https://www.amazon.com/");
    //1.YOL BAY TAGNAME:
    cy.get('input')
    //cy.get('#twotabsearchtextbox').type('iphone')

    //2.YOL BY İD:
    cy.get("#twotabsearchtextbox")
    

    //3.YOL BY CLASS
    cy.get('.nav-input nav-progressive-attribute')

    //4.YOL BY ATTRIBUTE AND VALUE.....
  });

  it("XPATH", () => {
    cy.visit('https://www.google.com')
    cy.xpath("//*[@id='APjFqb']").type('iphone')

  })



});
