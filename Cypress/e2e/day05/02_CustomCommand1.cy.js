/// <reference types="cypress" />



describe("", () => {
  it.skip("1. test", () => {
    cy.visit("http://www.automationpractice.pl/index.php");
    cy.get(".login").click();
    cy.get("#email").type("buyukergene@hotmail.com");
    cy.get("#passwd").type("123456");
    cy.get("#SubmitLogin > span").click();
    cy.get(".account > span").should("have.text", "Omer b");
  });

  it.skip("Positive Login", () => {
    cy.ap_login("buyukergene@hotmail.com", "123456");
    cy.get(".account > span").should("have.text", "Omer b");
    /*
    Yukarıda 1. testte hard coding yaparak uuzun uzun login yaptık.
    Postive login testinde ise supportun altına custom folderının içine siteye gitmeyi,
    email, password girmeyi bir method olarak yazdık ve dinamik kullanmış olduk..... 
    */
    
    })

    it.only("Negative Test", () => {
        cy.ap_login("buyukergene@hotmail.com", "123");
        cy.get('ol > li').should('have.text','Invalid password.')


  })
})
