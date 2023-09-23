/// <reference types="cypress" />

describe('Scroll',()=>{
    it('',()=>{
        cy.visit('https://qa-environment.koalaresorthotels.com/')
        cy.wait(5000)
        cy.get(':nth-child(2) > .ftco-footer-widget > .list-unstyled > :nth-child(1) > .py-2').scrollIntoView()
        cy.scrollTo(0,0)// kordinat vererek en basa gonderdik


        
    })

   
    
})