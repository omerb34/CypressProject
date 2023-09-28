/// <reference types="cypress" />
import { faker } from '@faker-js/faker';


// faker kullanmak için https://www.npmjs.com/package/@faker-js/faker git
// yukarıya import { faker } from '@faker-js/faker'; şeklinde import yap..

describe('Using Faker',()=>{

    it('Faker Login Test',()=>{
        cy.visit("http://www.automationpractice.pl/index.php");
        cy.get('.login').click()

        let email = faker.internet.email()
        let firstname= faker.person.firstName('male')
        let Lastname= faker.person.lastName('male')

        cy.get('#email_create').type(email)
        cy.get('#SubmitCreate > span').click()
        cy.get('#id_gender1').click()
        cy.get('#customer_firstname').type(firstname)
        cy.get('#customer_lastname').type(Lastname)

       







        
    })

  
    
})
