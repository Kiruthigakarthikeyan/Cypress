

describe('Drag and Drop Test', () => {
    it('should drag the Angular logo to the Drop area', () => {
      // Visit the demo site
      cy.visit('https://demo.automationtesting.in/Static.html');
  
      // Perform drag and drop
      cy.get('#angular').drag('#droparea');
  
      // Verify the drop was successful (e.g., if text changes or another event occurs)
      cy.get('#droparea').should('contain.text', 'Angular');
    });
  });
  