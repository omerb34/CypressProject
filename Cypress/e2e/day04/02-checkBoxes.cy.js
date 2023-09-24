/// <reference types="cypress" />

describe('CheckBoxes',()=>{

    it.skip('SingleBoxes',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]')
        .click()
        cy.get('#layered_category_4').should('not.be.checked')//kutucuğun tıklı olmadıgını test etti
        cy.get('#layered_category_4').check() //ilk elemente tkla..
        //check() tıklama yapar checkBox buttonlara...
        cy.get('#layered_category_4').check().should('be.checked')

        //tıklamayı kaldırmak ıcın ıse..
        cy.get('#layered_category_4').uncheck().should('not.be.checked')


    })

    it.skip('All CheckBoxes',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]')
        .click()
        cy.get("input[type='checkBox']").check()
        //yukarıda bütün checkboxların input type ile basladıgını gorduk css ile 
        //locate alıp tamamına tıkladık.
        cy.get("input[type='checkBox']").uncheck()// butun tıklamalrı gerı kaldırdık

        
    })

    it.skip('All CheckBoxes2',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]')
        .click()

        //1.kutuya tıkla
        cy.get("input[type='checkBox']").eq(0).check()

        //5.kutuya tıkla
        cy.get("input[type='checkBox']").eq(4).check()


    })

    it('All CheckBoxes3',()=>{
        cy.visit('http://www.automationpractice.pl/index.php')
        cy.get('.sf-menu > :nth-child(1) > [href="http://www.automationpractice.pl/index.php?id_category=3&controller=category"]')
        .click()

        cy.get("input[type='checkBox']").click({ multiple: true })
        //CLİCK NORMALDE tEK ELEMENTE TIKLAR click({ multiple: true }) ŞEKLİNDE ISE HEPSİNE TIKLAR 
        
    })

    
})
