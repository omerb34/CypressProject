/// <reference types="cypress" />

describe('Multiple WİNDOW',()=>{
    //seleniumda multiple window olunca handle ile gidebiliyyorduk. ancak cypress 
    //bunu münkün kılmıyor. çözüm olarak ise bize attribueyi çıkar diyor..
    //target_blank vardı bunu sileceğiz

    it('ATTRİBUTEYİ ÇIKAR',()=>{
        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').invoke('removeAttr','target').click()

        
    })

   
})
