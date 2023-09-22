/// <reference types="cypress" />

describe("Login test", () => {
  it("Login test", () => {
    cy.visit("https://qa-environment.koalaresorthotels.com/");
    //Tıklama yapmak ıcın contains de kullanırız....
    // cy.contains('Log in').click()

    //bir diğer yöntem:contains yazdıktan sonra ilgili yerin ocate alıp
    //orada yazan exti de ekleyebiliriz... yani formül: contains('locator','Text') olur

    //not:büyük küçük mharf duyarlı olmaması için yapmamız gereken şey ise matchCase kullanmaktır.
    cy.contains("log in", { matchCase: false }).click();

    //Assertion:

    //1.yOL LOGİN YAZILAN YERDE login var mı:
    cy.get("#navLogon > .nav-link").should("have.text", "Log in");

    //2.yOL SHOLUD:
    cy.url().should("include", "Account/Logon");

    //3.yOL gorunur oldu mu:

    cy.get(".row > .mb-4").should("be.visible");

    //4.yOL locate edilen yerdeki metin Log in içeriyor mu?
    cy.get("#navLogon > .nav-link").should("include.text", "Log in");

    /////SAYFADAKİ TOPLAM LİNK SAYISI////////
    cy.get('li a').should('have.length',29)

    ///find() parent elemnetlerin child elemanlaeını bulmak ıcın kullanılır
    cy.get('li').find('a[href="/Rooms/320"]').should('have.text','Twin 2')


    /// within()get ve find ile bulamadığımız elemntleri bulmada kullnırız.. 



  })
})
