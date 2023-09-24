/// <reference types="cypress" />

describe('',()=>{
    it('',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('#search_query_top').type('dress')
        cy.get('ul > :nth-child(7)').click()
        cy.get('h1').should('be.visible')
    })

   
    
})
