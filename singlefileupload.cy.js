describe('File Upload Test', () => {
    it('File upload', () => {
      // Visit the file upload page
      cy.visit('https://the-internet.herokuapp.com/upload');
  
      // Select the file input element
      const filePath = 'flower.jpg'; // Modify this to your file path
      cy.get('input[type="file"]').attachFile(filePath);
  
      // Click the 'Upload' button
      cy.get('#file-submit').click();
  
      // Verify that the file upload was successful
      cy.get('#uploaded-files').should('contain', 'file.txt'); // Replace with the correct filename
    });
  });
  