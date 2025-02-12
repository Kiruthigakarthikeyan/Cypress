describe('Flipkart Automation - Signup, Login, Search, Cart, Price Verification', () => {

    before(() => {
      cy.visit('https://www.flipkart.com/');
      cy.clearCookies();
      cy.clearLocalStorage();
    });
  
    it('Close Login Popup if Present', () => {
      cy.get('body').then($body => {
        if ($body.find('._2KpZ6l._2doB4z').length) {
          cy.get('._2KpZ6l._2doB4z').click();
        }
      });
    });
  
    it('Login to Flipkart', () => {
      cy.session('userSession', () => { // Preserve session across tests
        cy.get('._1_3w1N').click();
        cy.get('input._2IX_2-').first().type('testuser@gmail.com', { delay: 100 });
        cy.get('input._2IX_2-').last().type('Test@1234', { delay: 100 });
  
        cy.get('body').then($body => {
          if ($body.find('button._2KpZ6l._2HKlqd._3AWRsL').length) {
            cy.get('button._2KpZ6l._2HKlqd._3AWRsL').click();
          } else if ($body.find('button._2KpZ6l._1seccl._3AWRsL').length) {
            cy.get('button._2KpZ6l._1seccl._3AWRsL').click();
            cy.log('OTP required. Please enter OTP manually.');
            cy.wait(30000);
          }
        });
  
        cy.get('._1ruvv2', { timeout: 20000 }).should('exist');
      });
    });
  
    it('Search for a Product', () => {
      cy.get('input[title="Search for products, brands and more"]').type('iPhone 13{enter}');
      cy.xpath('//div[contains(@class, "_1AtVbE")]', { timeout: 15000 }).should('exist');
    });
  
    it('Add Product to Cart and Verify', () => {
      cy.xpath('(//div[contains(@class, "_1fQZEK")])[1]').invoke('removeAttr', 'target').click();
  
      cy.xpath('//button[contains(@class, "_2KpZ6l") and contains(text(), "Add to cart")]', { timeout: 15000 })
        .should('be.visible')
        .click();
  
      cy.xpath('//span[contains(@class, "_2nQDXZ")]', { timeout: 10000 }).should('contain', 'iPhone 13');
    });
  
    it('Verify Price Calculations', () => {
      cy.xpath('//span[contains(@class, "_3LxTgx")]').then(($priceElement) => {
        const priceText = $priceElement.text().replace(/[^0-9]/g, '');
        const price = parseInt(priceText);
  
        cy.xpath('(//button[contains(@class, "_23FHuj")])[2]').click();
        cy.xpath('//span[contains(@class, "_3LxTgx")]', { timeout: 5000 }).should($newPriceElement => {
          const newPriceText = $newPriceElement.text().replace(/[^0-9]/g, '');
          const newPrice = parseInt(newPriceText);
          expect(newPrice).to.equal(price * 2);
        });
  
        cy.xpath('(//button[contains(@class, "_23FHuj")])[1]').click();
        cy.xpath('//span[contains(@class, "_3LxTgx")]', { timeout: 5000 }).should($reducedPriceElement => {
          const reducedPriceText = $reducedPriceElement.text().replace(/[^0-9]/g, '');
          const reducedPrice = parseInt(reducedPriceText);
          expect(reducedPrice).to.equal(price);
        });
      });
    });
  
  });
  