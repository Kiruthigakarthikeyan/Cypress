// cypress/integration/dummyticket_negative_spec.js

describe('Validate Dummy ticket site', () => {

  it('Verify error messages when required fields are missing', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/', { failOnStatusCode: false });
    cy.document().its('readyState').should('eq', 'complete');
    cy.window().should('have.property', 'document');

    cy.get('#product_549').check();
    cy.get('#travname').type('kiruthiga');
    cy.get('#travlastname').type('Muthukuamr');
    cy.get('#fromcity').should('be.visible').should('exist').type('Bangalore');
    cy.get('#tocity').should('be.visible').should('exist').type('India');
    cy.get('#departon').should('be.visible').should('exist').click();
    cy.wait(2000);
    cy.get('.ui-datepicker-month').should('be.visible').should('exist').select('Jul');
    cy.get(':nth-child(2) > :nth-child(5) > .ui-state-default').should('be.visible').should('exist').click();
    cy.get('#notes').should('be.visible').should('exist').type('Sample test');

    cy.get('#appoinmentdate').should('be.visible').should('exist').click();
    cy.wait(2000);
    cy.get('.ui-datepicker-next > .ui-icon').click();
    cy.wait(2000);
    cy.get(':nth-child(4) > :nth-child(2) > .ui-state-default').click();

    cy.get('#deliverymethod_3').should('be.visible').should('exist').click();

    // Leaving billing details empty to trigger negative scenario
    cy.get('#place_order').should('be.visible').should('exist').click();
    cy.wait(5000);

    cy.get('[data-id="billing_phone"]').should('be.visible').should('exist')
      .should('have.text', '\n\t\t\tBilling Phone is a required field.\t\t');
    cy.get('[data-id="billing_email"]').should('be.visible').should('exist')
      .should('have.text', '\n\t\t\tBilling Email address is a required field.\t\t');
  });

  it('Verify error messages when invalid email and phone number are provided', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/', { failOnStatusCode: false });
    cy.document().its('readyState').should('eq', 'complete');
    cy.window().should('have.property', 'document');

    cy.get('#product_549').check();
    cy.get('#travname').type('Priya');
    cy.get('#travlastname').type('Rai');
    cy.get('#fromcity').type('Chennai');
    cy.get('#tocity').type('India');
    cy.get('#departon').click();
    cy.wait(2000);
    cy.get('.ui-datepicker-month').select('Jan');
    cy.get(':nth-child(3) > :nth-child(4) > .ui-state-default').click();
    cy.get('#notes').type('Invalid test');

    cy.get('#appoinmentdate').click();
    cy.wait(2000);
    cy.get('.ui-datepicker-next > .ui-icon').click();
    cy.wait(2000);
    cy.get(':nth-child(5) > :nth-child(3) > .ui-state-default').click();

    cy.get('#deliverymethod_3').click();

    // Providing invalid billing details
    cy.get('#billing_phone').type('sdgaggdg');
    cy.get('#billing_email').type('kjsahkjdgh.&%');
    cy.get('#place_order').click();
    cy.wait(5000);

    cy.get('[data-id="billing_phone"]').should('be.visible')
      .should('contain.text', 'Invalid phone number.');
    cy.get('[data-id="billing_email"]').should('be.visible')
      .should('contain.text', 'Invalid email address.');
  });

  it('Verify error when selecting past date for departure', () => {
    cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/', { failOnStatusCode: false });
    cy.document().its('readyState').should('eq', 'complete');
    cy.window().should('have.property', 'document');

    cy.get('#product_549').check();
    cy.get('#travname').type('Kir');
    cy.get('#travlastname').type('karthi');
    cy.get('#fromcity').type('Madurai');
    cy.get('#tocity').type('India');
    cy.get('#departon').click();
    cy.wait(2000);
    cy.get('.ui-datepicker-month').select('Feb');
    cy.get(':nth-child(1) > :nth-child(1) > .ui-state-default').click(); // Past date
    cy.get('#notes').type('Past date scenario');

    cy.get('#deliverymethod_3').click();
    cy.get('#place_order').click();
    cy.wait(5000);

    cy.get('.woocommerce-error').should('be.visible')
      .should('contain.text', 'Departure date cannot be in the past.');
  });

});
