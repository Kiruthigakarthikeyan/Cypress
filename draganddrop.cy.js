describe('Drag and Drop File Upload', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/upload'); // Visit the file upload page
    });
  
    it('Should drag and drop a file and upload it', () => {
      const fileName = 'test.pdf'; // File in cypress/fixtures/
  
      // Simulate drag and drop using attachFile with subjectType: 'drag-n-drop'
      cy.get('#drag-drop-upload') // Drag and drop area selector
        .attachFile(fileName, { subjectType: 'drag-n-drop' });
  
      // Click the upload button
      cy.get('#file-submit').click();
  
      
    });
  });
  