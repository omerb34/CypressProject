/// <reference types="cypress" />

describe('Login Menu Test',()=>{

    it.skip('TC01',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.login').click()
        cy.contains('#create-account_form > .page-subheading', 'Create an account')
        cy.get('#create-account_form > .form_content > .form-group > label').should('be.visible')

    })

    it('TC02',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.login').click()
        
    })
    
})

