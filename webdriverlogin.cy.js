describe('Automate WebDriver University Login Portal', () => {
    beforeEach(() => {
        cy.visit('https://webdriveruniversity.com/Login-Portal/index.html');
    });

    it('login with valid credentials', () => {
        cy.get('#text').type('webdriver');
        cy.get('#password').type('webdriver123');
        cy.get('#login-button').click();

        // Verify the success message appears in an alert
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('validation succeeded');
        });
    });

    it('login with invalid credentials', () => {
        cy.get('#text').type('invalidUser');
        cy.get('#password').type('wrongPassword');
        cy.get('#login-button').click();

        // Verify the error alert
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contains('validation failed');
        });
    });
});
