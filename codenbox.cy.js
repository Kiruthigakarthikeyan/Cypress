describe('CodenBox Practice Page Automation', () => {
    beforeEach(() => {
  
        cy.visit('https://codenboxautomationlab.com/practice/', { timeout: 120000 });
        
    });
    it('Checks the page title', () => {
        cy.title().should('include', 'Practice');
    });
         
    it('Fills out the name field', () => {
      cy.selectRadioButton('radio2');               // Select radio button
      cy.checkCheckbox('checkBoxOption1');         // Check and verify checkbox
      cy.selectFromAutocomplete('autocomplete', 'Ind', 'India');  // Select "India" from autocomplete
      cy.fillNameAndHandleAlert('John Doe');       // Fill name and handle alert
      cy.handleConfirmAlert(/confirm/i); // Handle confirm alert
      });

      it('Verify the table element and its contents', () => {
      
        //  Verify the <legend> is present
     cy.contains('legend', 'Web Table Example').should('be.visible');
    
        // Verify the table exists and is visible
        cy.get('table#product')
          .should('exist')
          .and('be.visible');
    
        //  Verify table headers
        cy.get('table#product th').then(($headers) => {
          const headers = [...$headers].map(header => header.innerText.trim());
          expect(headers).to.deep.equal(['Instructor', 'Course', 'Price']);
        });
    
        // Verify the number of data rows (11 courses + 1 total = 12 rows)
        cy.get('table#product tbody tr').should('have.length', 12);
    
        // Verify the Total row data
        cy.get('table#product tbody tr').last().within(() => {
          cy.get('td').eq(0).should('have.text', 'Total');
          cy.get('td').eq(2).should('have.text', '297');
        });
    
        // Verify a specific course and its price
        cy.get('table#product tbody tr')
          .contains('td', 'Learn JMETER from Scratch – (Performance + Load) Testing Tool')
          .siblings('td').eq(1)
          .should('have.text', '22');
      });
    
      it('should verify that social media links are present and correct', () => {
        // Verify LinkedIn link
        cy.get('a[href*="linkedin.com"]').should('be.visible')
          .and('have.attr', 'href').and('include', 'linkedin.com');
    
        // Verify Facebook link
        cy.get('a[href*="facebook.com"]').should('be.visible')
          .and('have.attr', 'href').and('include', 'facebook.com');
    
        // Verify Twitter (X) link
        cy.get('a[href*="twitter.com"]').should('be.visible')
          .and('have.attr', 'href').and('include', 'twitter.com');
    
        // Verify YouTube link
        cy.get('a[href*="youtube.com"]').should('be.visible')
          .and('have.attr', 'href').and('include', 'youtube.com');
      });
    
      it('Hide/show element', () => {
        //  Click the "Show" button and verify input field is visible
        cy.get('#show-textbox')
          .should('be.visible')
          .and('have.value', 'Show')
          .click();
    
        cy.get('#enabled-example-input')
          .should('be.visible')
          .and('not.be.disabled')  // Ensure it's enabled after showing
          .and('have.attr', 'placeholder', 'Enabled/Disabled Field');
    
        //  Click the "Disable" button and verify the input field is hidden, disabled, or removed
        cy.get('#disabled-button')
          .should('be.visible')
          .and('have.value', 'Disable')
          .click();
        })

      it('Should hover over the Mouse Hover button and click an option', () => {
        cy.get("#mousehover").trigger('mouseover')
  cy.contains('Top')
  cy.contains('Reload')
    
        });
  
        it('Booking calender', () => {
          cy.contains('a', 'Booking Calendar')
          .should('have.attr', 'href', 'https://codenboxautomationlab.com/about/booking/')
          .invoke('removeAttr', 'target') // Remove target to open in the same tab
          .click();
    
        //  Verify redirection to the Booking page
        cy.url().should('include', '/about/booking/');
        // Fill in the name field
        cy.get('#name1')
          .type('keerthi')
          .should('have.value', 'keerthi');
    
        // Fill in the second name field
        cy.get('#secondname1')
          .type('k')
          .should('have.value', 'k');
    
        // Enter a valid email address and assert validation
        cy.get('#email1')
          .type('kiruthiga@gmail.com')
          .should('have.value', 'kiruthiga@gmail.com')
          .should('not.have.class', 'input-error');
    
        // Enter a valid phone number and assert validation
        cy.get('#phone1')
          .type('9874563210')
          .should('have.value', '9874563210')
          .should('not.have.class', 'input-error');
    
        // Enter details in the textarea and assert
        cy.get('#details1')
          .type('Looking forward to the booking.')
          .should('have.value', 'Looking forward to the booking.')
          .should('not.have.class', 'input-error');
    
        // Select a time range from the dropdown and assert selection
        cy.get('#rangetime1')
          .select('15:00 - 16:00')  // Selects "3:00 PM - 4:00 PM"
          .should('have.value', '15:00 - 16:00');
    
        // Select a date from the date picker
        cy.get('a').contains('26').click();
    
        // Submit the form by clicking the "Send" button
        cy.get('.wpbc_button_light').click();
         });
        
  it('Enable disable elemtemt', ()=>{
          // Click the disable button and check if the target input becomes disabled
       cy.get('#disabled-button').click();
       cy.get('#enabled-example-input').should('be.disabled');
       cy.get('#enabled-button').click();
       cy.get('#enabled-example-input').should('not.be.disabled');
  })
  
 /* it('handles  iframe', () => {
    const iframe = document.getElementById('getiframe');
iframe.onload = () => {
  try {
    const iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    console.log(iframeDoc.body.innerText); // Access if same-origin
  } catch (e) {
    console.error("Access blocked due to cross-origin restrictions:", e);
  }
};
  })*/
});
    
      
