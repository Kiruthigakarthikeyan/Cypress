
describe('customcommands',function(){
    it('Orangehrm login',function(){
   
        cy.orangehrm('Admin','admin123')
        cy.title().should('be.equal','OrangeHRM')
    })


    it('Test admin login',function(){
        cy.orangehrm('Admin','admin123')
        cy.title().should('be.equal','OrangeHRM')
    })


    it('Invalid credentials',function(){
       
        cy.orangehrm('inval','admin')
        cy.title().should('be.equal','OrangeHRM')
    })
})