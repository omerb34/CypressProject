/// <reference types="cypress" />

describe('DragAndDrop',()=>{
    it.only('',()=>{
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
        cy.wait(5000)
        cy.get('#column-a').drag('#column-b')
        
    })

   
    
})
