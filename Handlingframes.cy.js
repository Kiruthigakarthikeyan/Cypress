describe('Handling Frames on Automation Testing Demo', () => {
    beforeEach(() => {
        // Visit the URL before each test
        cy.visit('https://demo.automationtesting.in/Frames.html');

        // Handle uncaught exceptions
        Cypress.on('uncaught:exception', (err, runnable) => {
            // Returning false prevents Cypress from failing the test
            return false;
        });
    });

    it('Interacts with the Single Frame', () => {
        // Click on the "Single Frame" tab (if not already selected)
        cy.get('a[href="#Single"]').click();

        // Access the iframe and type text into the input field
        cy.frameLoaded('#singleframe'); // Load the iframe
        cy.iframe('#singleframe').find('input[type="text"]').type('Hello, Single Frame!');
    });

    it('Interacts with the Nested Frames', () => {
        // Click on the "Iframe with in an Iframe" tab
        cy.get('a[href="#Multiple"]').click();

        // Access the outer iframe
        cy.frameLoaded('iframe[src="MultipleFrames.html"]');
        cy.iframe('iframe[src="MultipleFrames.html"]').within(() => {
            // Access the inner iframe and type text into the input field
            cy.frameLoaded('iframe');
            cy.iframe('iframe').find('input[type="text"]').type('Hello, Nested Frame!');
        });
    });
});
