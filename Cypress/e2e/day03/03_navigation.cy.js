/// <reference types="cypress" />

describe('Navigation',()=>{

    it('Back,Forward,Refresh',()=>{
        cy.visit('https://github.com/')
        cy.get('div.width-lg-auto > :nth-child(2) > .d-inline-block').click()
        cy.wait(5000)
        cy.go('back') // cy.go('-1) buda aynı şey 
        cy.wait(5000)
        cy.go('forward')
        cy.reload()// bu kod ise sayfayı yeniden yukler 
        
    })

   
    
})
