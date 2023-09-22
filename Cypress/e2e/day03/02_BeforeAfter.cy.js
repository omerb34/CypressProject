/// <reference types="cypress" />

describe('Before After',()=>{
    before( () => {
        cy.log('her test dosyasından önce bir kez çalışır')
    })
    after( () => {
        cy.log('her test dosyasından sonra bir kez çalışır')
    })
    beforeEach( () => {
        cy.log('her testten önce bir kez çalışır')
    })
    afterEach( () => {
        cy.log('her testten sonra bir kez çalışır')
    
    })
    it('TC01',()=>{
        cy.log('tc01')
    })

    it('TC02',()=>{
        cy.log('tc02')
    })
    
})

