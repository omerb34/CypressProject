/// <reference types="cypress" />

describe('loginnn',()=>{
    it('Login Test',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.get('#navLogon > .nav-link').click()
        cy.url().should('include','Account/Logon')
        cy.get('#UserName').type('Manager')
       // cy.get('#Password').type('Manager1!')
        //cy.get('#btnSubmit').click();
        //alt satırdaki kod yukarıdakinin aynısı
        cy.get('#Password').type('Manager1! {enter}')
    })

    
    
})

