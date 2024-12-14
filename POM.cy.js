import RegistrationPage from '../support/registrationPage';

describe('Rediff Registration Form', () => {
  const registrationPage = new RegistrationPage();

  beforeEach(() => {
    registrationPage.visit();
  });

  it('should fill and submit the registration form', () => {
    registrationPage.fillFirstName('John Doe');
    registrationPage.fillRediffID('johndoe123');
    registrationPage.checkAvailability();
    registrationPage.fillPassword('password123');
    registrationPage.fillRetypePassword('password123');
    registrationPage.fillAlternateEmail('johndoe@example.com');
    registrationPage.selectSecurityQuestion('What is the name of your first school?');
    registrationPage.fillSecurityAnswer('ABC School');
    registrationPage.selectCountry('India');
    registrationPage.fillMobileNumber('9876543210');
    registrationPage.clickCreateMyAccount();

    // Add assertions as needed, for example:
    // cy.url().should('include', 'successPage'); // Replace 'successPage' with the actual URL fragment of the success page
  });
});