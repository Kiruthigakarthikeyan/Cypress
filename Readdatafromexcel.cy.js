describe("Login Test using Excel Data", () => {
    let excelData;
  
    before(function () {
      // Read the Excel file from the fixture before tests run
      cy.task('readXlsx', { filePath: 'cypress/fixtures/ReadExcelData.xlsx' })
        .then((data) => {
          excelData = data; // Store the Excel data into the variable
        });
    });
  
    it("Login using data from Excel", () => {
      // Ensure that the data is loaded correctly
      cy.wrap(excelData).should("not.be.empty");
  
      // Loop through the data from the Excel file (assumes the first column is the username and second column is the password)
      excelData.forEach((row) => {
        const username = row.username; // Adjust column name as per your sheet
        const password = row.password; // Adjust column name as per your sheet
  
        // Visit the login page
        cy.visit('https://demo.guru99.com/test/newtours/index.php');
        
        // Type username and password
        cy.get('input[name="userName"]').type(username);
        cy.get('input[name="password"]').type(password);
        
        // Click the submit button
        cy.get('input[name="submit"]').click();
  
        // Check for login success or failure
        if (username === "mercury" && password === "mercury") {
            cy.get('h3').should('have.text', 'Login Successfully'); 
        } 
  
      });
    });
  
  });
  
