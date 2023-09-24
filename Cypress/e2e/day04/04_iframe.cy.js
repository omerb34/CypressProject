/// <reference types="cypress" />

describe("", () => {
  it.only("", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.frameLoaded("#mce_0_ifr");// iframe'nin yerini belirle

    cy.iframe().find("p").clear();//once sil
    cy.iframe().find("p").type("omer ");//sonra omer yaz
  });

  /*
    note plugin indirmek için 
        1. wwww.npmjs.com sayfasına git
        2. npm install --save-dev cypress-iframe komutunu terminale gir
        3. İmport plıgin yapmak icın supportun altında e2e.js de 
         require('cypress-iframe) komutunu gir 
        4. ömce frameload() sonra frame() gir.....

        */
});
