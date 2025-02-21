describe("Handling Tabs Demo",()=>{
    it("Handle a tab in one screen",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.url().should('eq','https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').should('be.visible').should('exist').invoke('removeAttr','target').click()  
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000)
        cy.go('back')
        cy.url().should('eq','https://the-internet.herokuapp.com/windows')
    })


    it("Handle Tabs using href",()=>{
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.url().should('eq','https://the-internet.herokuapp.com/windows')
        cy.get('.example > a').then((n)=>{
            var urloftab=n.prop('href')
            cy.visit(urloftab)
        })
        cy.url().should('eq','https://the-internet.herokuapp.com/windows/new')
        cy.wait(3000)
        cy.go('back')
        cy.url().should('eq','https://the-internet.herokuapp.com/windows')
    })
})
