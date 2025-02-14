Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Prevents Cypress from failing on site errors
});

describe('Automate Click Buttons Page', () => {
    beforeEach(() => {
        cy.request('https://webdriveruniversity.com/Click-Buttons/index.html')
            .then((response) => {
                expect(response.status).to.eq(200);
            });
        cy.visit('https://webdriveruniversity.com/Click-Buttons/index.html');
    });

    it('Should click the first button and verify alert', () => {
        cy.get('#button1').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contain('Well done for successfully using the click() method!');
        });
    });

    it('Should click the second button and verify alert', () => {
        cy.get('#button2').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contain('It’s that easy!! Well I think it is...');
        });
    });

    it('Should click the third button and verify alert', () => {
        cy.get('#button3').click();
        cy.on('window:alert', (alertText) => {
            expect(alertText).to.contain('Well done! the click event worked as expected');
        });
    });
});
