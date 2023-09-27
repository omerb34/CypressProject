/// <reference types="cypress" />

describe('Custom Comand',()=>{
    it.only('Amazon Search',()=>{
      cy.amazonSearch('iphone')
        cy.xpath('//*[@id="sp-cc-accept"]').click()
        cy.get('#nav-search-submit-button').click()
        cy.get('.a-color-state').should('have.text','"iphone"')
        cy.screenshot()
          
    })
})

