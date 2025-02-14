describe('Automate Contact Us Form', () => {
    beforeEach(() => {
        cy.visit('http://webdriveruniversity.com/Contact-Us/contactus.html');
    });

    it('Should submit the contact form successfully', () => {
        cy.get('input[name="first_name"]').type('John');
        cy.get('input[name="last_name"]').type('Doe');
        cy.get('input[name="email"]').type('john.doe@example.com');
        cy.get('textarea[name="message"]').type('This is a test message for Cypress automation.');
        
        cy.get('input[value="SUBMIT"]').click();
        
        // Verify success message
        cy.get('h1').should('have.text', 'Thank You for your Message!');
    });

    it('Should display an error for missing required fields', () => {
        cy.get('input[name="first_name"]').type('John');
        cy.get('input[name="last_name"]').type('Doe');
        cy.get('textarea[name="message"]').type('Missing email test.');
        
        cy.get('input[value="SUBMIT"]').click();

        // Verify error message
        cy.get('body').should('contain', 'Error: all fields are required');
    });
});
