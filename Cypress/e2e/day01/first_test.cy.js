/// <reference types="cypress" />

describe('My fisrst Test',()=>{
    // discrabe tesi tamamlamak demektedir. 
    //mochadan(framework) gelmektedir. 
    it('Url Test',()=>{
        cy.visit('https://www.google.com')
        cy.url().should('include','google')
  
        
    })

    it('Title test',()=>{
        cy.visit('https://www.google.com')
        cy.title().should('include','Goog')
        cy.title().should('eq','Google')
        

        
    })
    
})