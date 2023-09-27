/// <reference types="cypress" />

describe('File Upload',()=>{


    it('Single Upload',()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="iki.jpg"
        cy.wait(3000)
        cy.get('#filesToUpload').attachFile(path1)
        // çok önemlialacağımız dosyaları framaworkte fxtures dosyasının altına koymamız gerekir
     

        
    })


    it.only('Multiple Upload 2',()=>{
        
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        const path1="iki.jpg"
        const path2="bes.jpg"
        const path3="7.jpg"
        cy.get('#filesToUpload').attachFile([path1,path2,path3]);
        
    })
    
    
})

