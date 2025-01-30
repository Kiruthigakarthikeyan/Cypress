describe('Intercept Network Requests (XHR and Fetch) with Cypress', () => {
    const url = 'https://qaboxletstestcypresspracticesite.netlify.app/intercept';
  
    beforeEach(() => {
      // Visit the website
      cy.visit(url);
    });
  
    it('Intercept and stub XHR requests', () => {
      // Intercept an XHR request and provide a stubbed response
      cy.intercept('GET', '**/api/data', {
        statusCode: 200,
        body: { message: 'This is a stubbed XHR response' },
      }).as('getData');
  
      // Trigger the XHR request by interacting with the page
      cy.get('#xhr-trigger').click();
  
      // Wait for the intercepted XHR request to complete
      cy.wait('@getData').then((interception) => {
        // Validate the request and response
        expect(interception.response.statusCode).to.eq(200);
        expect(interception.response.body.message).to.eq('This is a stubbed XHR response');
      });
  
      // Validate the UI reflects the stubbed response
      cy.get('#xhr-response').should('contain.text', 'This is a stubbed XHR response');
    });
  
    it('Intercept and stub Fetch requests', () => {
      // Intercept a Fetch request and provide a stubbed response
      cy.intercept('POST', '**/api/fetch', (req) => {
        req.reply({
          statusCode: 201,
          body: { success: true, data: 'Stubbed Fetch Response' },
        });
      }).as('fetchData');
  
      // Trigger the Fetch request by interacting with the page
      cy.get('#fetch-trigger').click();
  
      // Wait for the intercepted Fetch request to complete
      cy.wait('@fetchData').then((interception) => {
        // Validate the request and response
        expect(interception.response.statusCode).to.eq(201);
        expect(interception.response.body.data).to.eq('Stubbed Fetch Response');
      });
  
      // Validate the UI reflects the stubbed response
      cy.get('#fetch-response').should('contain.text', 'Stubbed Fetch Response');
    });
  });
  