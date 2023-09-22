/// <reference types="cypress" />

describe('Hover Over',()=>{
    it('',()=>{
    cy.visit('http://www.amazon.com')
    cy.get('.icp-nav-link-inner').trigger('mouseover')
    cy.wait(3000)
        cy.xpath("(//*[.='Change country/region.'])[2]").click()
        cy.get('.a-dropdown-prompt').click('')
        cy.get('#icp-dropdown_18').click()
    })

  
    
})
