describe('Multiple File Upload Test', () => {
    it('should upload multiple files successfully', () => {
     
      cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php');
  
      const filePaths = ['flower1.txt', 'flower2.jpg',  'flower3.png'];
  
      
      cy.get('input[type="file"]').attachFile(filePaths);
  
     
      cy.get('input[type="submit"]').click();
  
      
      filePaths.forEach((file) => {
        cy.get('#filelist').should('contain', file);
      });
    });
  });
  