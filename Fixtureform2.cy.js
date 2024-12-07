describe('Fixture', function(){
    before(function(){
        cy.fixture('form2').then(function(data){
            this.data=data
            cy.visit('https://mytestingthoughts.com/Sample/home.html')
        })

    })
  
    it('Fill form', function () {
       
      cy.get('input[name=first_name]').type(this.data.firstName)
      cy.get('input[name=last_name]').type(this.data.lastName)
      cy.get('input[name=user_name]').type(this.data.username)
      cy.get('input[name=email]').type(this.data.email)
      cy.get('input[name=user_password]').type(this.data.password)
      cy.get('input[name=confirm_password]').type(this.data.confirmPassword)
      cy.get('input[name=contact_no]').type(this.data.phone)
      cy.get('input[type="radio"][value="Female"]').check()
    cy.get('select[name="department"]').select(this.data.department)

  
    cy.get("#exampleFormControlTextarea1").type(this.data.additionalInfo)

      cy.get('input[type="submit"][value="btn btn-warning"]').click()
  
      cy.get('.message').should('contain', 'Form submitted successfully!')
    })
  })