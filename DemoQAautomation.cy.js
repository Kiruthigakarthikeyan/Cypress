Cypress.on('uncaught:exception', (err, runnable) => {
    // Return false to prevent Cypress from failing the test on the exception
    return false;
  });

describe('Demo QA Automation Registration Test', () => {

    // Test case to visit the registration page and fill out the form
    it('should fill out the registration form and submit', () => {
  
      // Visit the Demo QA Automation Register page
      cy.visit('https://demo.automationtesting.in/Register.html');
  
      // Fill out the form with required information
  
      // First name
      cy.get('input[placeholder="First Name"]')
        .type('kiruthiga')
        .should('have.value', 'kiruthiga');
  
      // Last name
      cy.get('input[placeholder="Last Name"]')
        .type('K')
        .should('have.value', 'K');
  
      // Address
      cy.get('textarea[ng-model="Adress"]')
        .type('123 East Street, City, Country');
  
      // Email
      cy.get('input[ng-model="EmailAdress"]')
        .type('test@gmail.com')
        .should('have.value', 'test@gmail.com');
  
      // Phone number
      cy.get('input[ng-model="Phone"]')
        .type('9638527410')
        .should('have.value', '9638527410');
  
      // Gender - Female
      cy.get('input[value="FeMale"]')
        .check()
        .should('be.checked');
  
      // Hobbies - Movies
      cy.get('input[value="Movies"]')
        .check()
        .should('be.checked');
  
      // Languages - English
     // cy.get('#msdd').click();
//cy.get('a').contains('English').debug().click();
      // Skills - Java
      cy.get('#Skills').select('Java');
  
      // Country - Select a country
      cy.get('.select2-selection--single').click();  // Click on the Select2 input box
    
    // Wait for dropdown options to appear (optional)
    cy.wait(500);  // Optional, depending on how the dropdown behaves

    // Now, select the option from the dropdown list
    cy.get('.select2-results__option').contains('India').click();  
  
      // Year, Month, Day (Birth Date)
      cy.get('#yearbox').select('1990');

  
      cy.get('select[ng-model="monthbox"]').select('March');

  
      cy.get('#daybox').select('15');
  
      // Password
      cy.get('input#firstpassword')
        .type('password123')
        .should('have.value', 'password123');
  
      // Confirm Password
      cy.get('input#secondpassword')
        .type('password123')
        .should('have.value', 'password123');
  
      // Submit the form
      cy.get('button#submitbtn')
        .click();
        cy.get('#imagesrc').attachFile("flower.jpg")
    });
  });
  