describe('Flipkart Seller SignUp Page Assertions', () => {
    it('Flipkart Seller SignUp page', () => {
      
      cy.visit('https://seller.flipkart.com/index.html#signUp/accountCreation/new')
  
     
      cy.title().should('include', 'Flipkart Seller')
  
      
      cy.url().should('include', 'accountCreation')
  
      cy.get('h1').should('have.text', 'Create a New Seller Account')
  
      
      cy.get('input[name="name"]').should('be.visible')
      cy.get('input[name="mobile"]').should('be.visible')
      cy.get('input[name="email"]').should('be.visible')
  
      cy.get('button').contains('Create Account').should('be.visible').and('not.be.disabled')
  
      
      cy.get('.error-message').should('not.be.visible')
  
     
      cy.get('a').contains('Already a seller?').should('be.visible').and('have.attr', 'href').and('include', 'login')
  
    })
  })