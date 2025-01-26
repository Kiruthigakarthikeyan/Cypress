// cypress/e2e/guru99_login.cy.js
const { readExcelData } = require('../support/readexcel');

describe('Guru99 Login Tests with Excel Data', () => {
  const baseUrl = 'https://demo.guru99.com/test/newtours/index.php';
  const excelFilePath = 'cypress/fixtures/testData.xlsx';
  const sheetName = 'LoginData';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Login using data from Excel', () => {
    // Read data from Excel file
    const loginData = readExcelData(excelFilePath, sheetName);

    // Iterate over each row of data
    loginData.forEach((row) => {
      // Perform login actions
      cy.get('input[name="userName"]').clear().type(row.Username);
      cy.get('input[name="password"]').clear().type(row.Password);
      cy.get('input[name="submit"]').click();

      // Assertion to verify login success or failure
      if (row.ExpectedResult === 'Pass') {
        cy.url().should('include', 'login_sucess'); // Example successful URL
        cy.contains('Login Successfully').should('be.visible');
      } else {
        cy.contains('user or password is incorrect').should('be.visible'); // Example failure message
      }

      // Navigate back to login page for the next iteration
      cy.go('back');
    });
  });
});
