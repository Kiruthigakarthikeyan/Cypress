// cypress/e2e/amazon_tests.cy.js

// Handle uncaught exceptions globally
Cypress.on('uncaught:exception', (err, runnable) => {
  // Log the exception
  console.error('Uncaught Exception:', err.message);
  // Prevent the test from failing due to the exception
  return false;
});

// Describe the test suite
describe('Amazon Signup, Login, Search, and Product Listing', () => {
  const baseUrl = 'https://www.amazon.com';

  // Run before each test
  beforeEach(() => {
    cy.visit(baseUrl);
    cy.viewport('macbook-15'); // Check responsiveness
  });

  it('Sign Up', () => {
    // Navigate to the Sign-Up page
    cy.get('#nav-link-accountList').click(); // Navigate to account menu
    cy.contains('Create your Amazon account').click({ force: true });

    // Fill in the sign-up form
    cy.get('#ap_customer_name').type('kiruthiga');
    cy.get("#ap_phone_number").type('8838885688');
    cy.get('#ap_password').type('Keerthi@123'); 
    cy.get('#continue').click();

    // Assertion: Verify navigation to OTP verification or next step
    cy.url().should('include', '/ap/register');
  });

  it('Login', () => {
    // Navigate to the Login page
    cy.get('#nav-link-accountList').click(); // Navigate to account menu
    cy.reload(); // Ensure fresh login page
    cy.wait(2000);

    // Fill in the login form
    cy.get("input[name='email']").should('be.visible').type('8838885688');
    cy.get('.a-button-input').click();
    cy.wait(2000);
    cy.get('#ap_password').type('Keerthi@123');
    cy.get('#signInSubmit').click();

    // Assertion: Verify successful login
    cy.get('#nav-link-accountList-nav-line-1').should('contain', 'Hello');
  });

  it('Search a Product', () => {
    // Enter a search query and perform the search
    cy.get('#twotabsearchtextbox').type('Books');
    cy.get('#nav-search-submit-button').click();

    // Assertion: Verify search results are displayed
    cy.url().should('include', 'k=Books');
    cy.get('.s-main-slot').should('exist');
  });

  it('List Products from Search Results', () => {
    // Perform a search
    cy.get('#twotabsearchtextbox').type('Books');
    cy.get('#nav-search-submit-button').click();

    // Extract and log product names and prices
    cy.get('.s-main-slot .s-result-item').each(($el, index) => {
      const productName = $el.find('h2 a span').text();
      const productPrice = $el.find('.a-price-whole').text();

      cy.log(`Product ${index + 1}: ${productName} - $${productPrice}`);
    });
  });

  it('Add Product to Cart', () => {
    // Search for a product
    cy.get('#twotabsearchtextbox').type('Handbags');
    cy.get('#nav-search-submit-button').click();

    // Select a specific product and add it to the cart
    cy.get('.s-main-slot .s-result-item').first().find('h2 a').click();
    cy.get('#add-to-cart-button').click();

    // Assertion: Verify product is added to the cart
    cy.get('#sw-atc-details-single-container')
      .should('be.visible')
      .and('contain', 'Added to Cart');

    // Increase product quantity in the cart
    cy.get('[aria-label="Increase quantity by one"] > .a-icon').click();

    // Proceed to checkout
    cy.get('#sc-buy-box-ptc-button')
      .should('be.visible')
      .and('contain', 'Buy Amazon items')
      .click();
  });
});
