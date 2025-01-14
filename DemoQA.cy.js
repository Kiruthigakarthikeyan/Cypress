// Import Cypress commands
/// <reference types="cypress" />

describe('Demo QA Registration Page Tests', () => {
    beforeEach(() => {
        // Ignore uncaught exceptions
        cy.on('uncaught:exception', (err, runnable) => {
            // Returning false here prevents Cypress from failing the test
            return false;
        });

        // Visit the registration page before each test
        cy.visit('https://demo.automationtesting.in/Register.html');
    });

    it('Should display the registration form', () => {
        // Assert that the form elements are visible
        cy.get('input[placeholder="First Name"]').should('be.visible');
        cy.get('input[placeholder="Last Name"]').should('be.visible');
        cy.get('textarea[ng-model="Adress"]').should('be.visible');
        cy.get('input[type="email"]').should('be.visible');
        cy.get('input[type="tel"]').should('be.visible');
        cy.get('input[value="Male"]').should('exist');
        cy.get('input[value="FeMale"]').should('exist');
        cy.get('#msdd').should('be.visible');
        cy.get('#Skills').should('be.visible');
        cy.get('#countries').should('be.visible');
        cy.get('#submitbtn').should('be.visible');
    });

    it('Should allow filling the registration form', () => {
        // Fill the form fields
        cy.get('input[placeholder="First Name"]').type('John');
        cy.get('input[placeholder="Last Name"]').type('Doe');
        cy.get('textarea[ng-model="Adress"]').type('123 Cypress Street');
        cy.get('input[type="email"]').type('johndoe@example.com');
        cy.get('input[type="tel"]').type('1234567890');
        cy.get('input[value="Male"]').check();
        cy.get('#msdd').click();
        cy.get('.ui-corner-all').contains('English').click();
        cy.get('select#Skills').select('Java');
        cy.get('select#countries').select('Australia');
        cy.get('#yearbox').select('1990');
        cy.get('select[placeholder="Month"]').select('July');
        cy.get('#daybox').select('15');
        cy.get('#firstpassword').type('Password123');
        cy.get('#secondpassword').type('Password123');
    });

    it('Should validate required fields', () => {
        // Try to submit without filling fields
        cy.get('#submitbtn').click();

        // Check for validation messages
        cy.get('input[placeholder="First Name"]').then(($input) => {
            expect($input[0].validationMessage).to.contain('Please fill out this field.');
        });
    });

    it('Should complete registration successfully', () => {
        // Fill the form fields
        cy.get('input[placeholder="First Name"]').type('John');
        cy.get('input[placeholder="Last Name"]').type('Doe');
        cy.get('textarea[ng-model="Adress"]').type('123 Cypress Street');
        cy.get('input[type="email"]').type('johndoe@example.com');
        cy.get('input[type="tel"]').type('1234567890');
        cy.get('input[value="Male"]').check();
        cy.get('#msdd').click();
        //cy.get('.ui-corner-all').contains('English').click();
        cy.get('select#Skills').select('Java');
      //  cy.get('select#countries').select('Australia');
      // Interact with the country dropdown
cy.get("span[role='combobox']").click(); // Open the dropdown
cy.get(".select2-results__option").contains('India').click(); // Select "India"

        cy.get('#yearbox').select('1990');
        cy.get('select[placeholder="Month"]').select('July');
        cy.get('#daybox').select('15');
        cy.get('#firstpassword').type('Password123');
        cy.get('#secondpassword').type('Password123');

        // Submit the form
        cy.get('#submitbtn').click();

    });
});
