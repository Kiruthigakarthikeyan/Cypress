describe('SauceDemo E2E - Login, Product Listing, Add to Cart, and Amount Calculation', () => {

    const username = 'standard_user';
    const password = 'secret_sauce';
  
    beforeEach(() => {
      cy.visit('https://www.saucedemo.com/');
      cy.get('[data-test="username"]').type(username);
      cy.get('[data-test="password"]').type(password);
      cy.get('[data-test="login-button"]').click();
      cy.url().should('include', '/inventory.html');
  
      // Verify that products have loaded
      cy.get('.inventory_list', { timeout: 10000 }).should('be.visible');
    });
  
    it('List Products and Add to Cart', () => {
      // Ensure products are visible before interacting
      cy.get('.inventory_item', { timeout: 10000 }).should('have.length.greaterThan', 0).as('products');
  
      cy.get('@products').eq(0).within(() => {
        cy.get('button').contains('Add to cart').click();
      });
  
      cy.get('@products').eq(1).within(() => {
        cy.get('button').contains('Add to cart').click();
      });
  
      // Verify Cart Badge Count
      cy.get('.shopping_cart_badge').should('have.text', '2');
    });
  
    it('Verify Cart and Amount Calculation', () => {
      // Add items to cart first to ensure cart is not empty
      cy.get('.inventory_item').eq(0).within(() => {
        cy.get('button').contains('Add to cart').click();
      });
      cy.get('.inventory_item').eq(1).within(() => {
        cy.get('button').contains('Add to cart').click();
      });
  
      cy.get('.shopping_cart_link').click();
      cy.url().should('include', '/cart.html');
  
      let totalAmount = 0;
  
      cy.get('.cart_item').each(($el) => {
        cy.wrap($el).find('.inventory_item_price').invoke('text').then((priceText) => {
          const price = parseFloat(priceText.replace('$', ''));
          totalAmount += price;
        });
      }).then(() => {
        cy.get('[data-test="checkout"]').click();
  
        // Fill Checkout Info
        cy.get('[data-test="firstName"]').type('John');
        cy.get('[data-test="lastName"]').type('Doe');
        cy.get('[data-test="postalCode"]').type('12345');
        cy.get('[data-test="continue"]').click();
  
        // Verify Total Price Calculation
        cy.get('.summary_subtotal_label').invoke('text').then((subTotalText) => {
          const subTotal = parseFloat(subTotalText.replace('Item total: $', ''));
          expect(subTotal).to.equal(totalAmount);
        });
      });
    });
  
    it('Complete the Purchase', () => {
      // Add items to cart and proceed to checkout before finishing the purchase
      cy.get('.inventory_item').eq(0).within(() => {
        cy.get('button').contains('Add to cart').click();
      });
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
      cy.get('[data-test="firstName"]').type('John');
      cy.get('[data-test="lastName"]').type('Doe');
      cy.get('[data-test="postalCode"]').type('12345');
      cy.get('[data-test="continue"]').click();
  
      cy.get('[data-test="finish"]').click();
      cy.get('.complete-header').should('contain', 'THANK YOU FOR YOUR ORDER');
    });
  
    afterEach(() => {
      // Logout to reset the session after each test
      cy.get('#react-burger-menu-btn').click();
      cy.get('#logout_sidebar_link').click();
      cy.url().should('include', '/');
    });
  
  });
  