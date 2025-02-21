describe('Multiple File Upload via File Selection', () => {
    beforeEach(() => {
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php'); // Visit the page
    });
  
    it('Should upload multiple files by selecting them', () => {
      const files = ['test.pdf', 'download.jpg']; // Files in cypress/fixtures/
  
      // Upload multiple files using the file input
      cy.get('#filesToUpload').attachFile(
        files.map(fileName => ({ filePath: fileName }))
      );
  
      // Verify that all files are listed after selection
      files.forEach(fileName => {
        cy.get('#fileList').should('contain.text', fileName);
      });
    });
  });
  