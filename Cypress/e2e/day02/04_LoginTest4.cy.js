/// <reference types="cypress" />

describe('Login Menu Test',()=>{

    it('Pozitive TEST',()=>{

        const username="Manager"
        const password="Manager1!"
       
        cy.visit("https://qa-environment.koalaresorthotels.com/");
        cy.contains("log in", { matchCase: false }).click();
    cy.get('#UserName').type(username)
    cy.get('#Password').type(password)
    cy.get('#btnSubmit').click()
    })

    it.skip('Negative Test ',()=>{
    
        
    })
    
})

