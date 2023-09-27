/// <reference types="cypress" />

describe('ViewPort',()=>{
    
    it.skip('',()=>{
       cy.visit('https://www.amazon.com/') 
       cy.viewport('iphone-8')
    })

    it('Custom ',()=>{
        cy.visit('https://www.amazon.com/') 
        cy.viewport(1500,1000)
        
    })
    
})

