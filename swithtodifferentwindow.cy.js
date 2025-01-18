describe('Handling New Window in Cypress for Windows Demo Page', () => {
    beforeEach(() => {
        // Visit the page before each test
        cy.visit('https://demo.automationtesting.in/Windows.html');
        
        // Handle uncaught exceptions so tests don't fail unexpectedly
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
        });
    });

    it('Extract the URL of the new window and visit it directly', () => {
        // Extract the link's href attribute (the URL that the new window would open)
        cy.get('a[target="_blank"]').then((link) => {
            const url = link.prop('href');
            console.log('Extracted URL:', url); // Debugging line to check the URL

            // Visit the extracted URL
            cy.visit(url);
        });

        
    });
});
