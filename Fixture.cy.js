describe('Fixture', function(){
    before(function(){
        cy.fixture('example').then(function(data){
            this.data=data

        })
    })
    it('Fixture test', function()
    {
        cy.visit('https://www.orangehrm.com/en/book-a-free-demo')
        cy.get('input[name=FullName]').type(this.data.name)
        cy.get('input[name=Contact]').type(this.data.phonenumber)
        cy.get('input[name=Email]').type(this.data.email)
        cy.get('input[name=CompanyName]').type(this.data.companyname)
        cy.get("#Form_getForm_Country").select(this.data.country).should('have.value','America')
        cy.get("#Form_getForm_NoOfEmployees").select(this.data.numberofemployee)
    })
})