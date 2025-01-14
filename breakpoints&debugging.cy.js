// Import Cypress commands
/// <reference types="cypress" />

describe('OrangeHRM Login Page Tests', () => {
    beforeEach(() => {
        // Visit the OrangeHRM login page before each test
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    });

    it('Should display the login form', () => {
        // Debug breakpoint to check the page load
        cy.debug();

        // Assert that the login form elements are visible
        cy.get('input[name="username"]').should('be.visible');
        cy.get('input[name="password"]').should('be.visible');
        cy.get('button[type="submit"]').should('be.visible');
    });

    it('Should not allow login with invalid credentials', () => {
        // Set a breakpoint for debugging
        cy.get('input[name="username"]').debug().type('invalidUser');
        cy.get('input[name="password"]').type('invalidPass');

        // Debug after entering credentials
        cy.debug();

        // Click the login button
        cy.get('button[type="submit"]').click();

        // Assert that an error message is displayed
        cy.get('.oxd-alert-content').should('contain', 'Invalid credentials');
    });

    it('Should log in successfully with valid credentials', () => {
        // Set breakpoints for step-by-step debugging
        cy.get('input[name="username"]').debug().type('Admin');
        cy.get('input[name="password"]').type('admin123');

        // Debug before submitting the form
        cy.debug();

        // Click the login button
        cy.get('button[type="submit"]').click();

        // Assert that the user is redirected to the dashboard
        cy.url().should('include', '/dashboard');

        // Debug after redirection
        cy.debug();
    });

    it('Should validate responsive behavior at breakpoints', () => {
        const viewports = [
            { width: 320, height: 480 },  // Mobile portrait
            { width: 768, height: 1024 }, // Tablet
            { width: 1280, height: 720 }, // Desktop
        ];

        viewports.forEach(viewport => {
            // Set the viewport dimensions
            cy.viewport(viewport.width, viewport.height);

            // Debug at each breakpoint
            cy.debug();

            // Assert that the login form is visible
            cy.get('input[name="username"]').should('be.visible');
            cy.get('input[name="password"]').should('be.visible');
            cy.get('button[type="submit"]').should('be.visible');
        });
    });
});
