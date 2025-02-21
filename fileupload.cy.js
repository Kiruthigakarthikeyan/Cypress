describe('File Upload on HerokuApp', () => {
    beforeEach(() => {
      cy.visit('https://the-internet.herokuapp.com/upload');
    });
  
    it('Should upload a file successfully', () => {
      const fileName = 'test.pdf'; // File in the fixtures folder
  
      // Upload file using the attachFile command
      cy.get('#file-upload').attachFile(fileName);
  
      // Click the upload button
      cy.get('#file-submit').click();
  
      // Assert that the file was uploaded successfully
      cy.get('#uploaded-files').should('contain.text', fileName);
    });
  });
  