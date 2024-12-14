import RegistrationPage from '../support/registrationPage';

describe('Rediff Registration Form', () => {
  const registrationPage = new RegistrationPage();

  beforeEach(() => {
    registrationPage.visit();
  });

  it('should fill and submit the registration form', () => {
    registrationPage.fillFirstName('kiruthiga');
    registrationPage.fillRediffID('kirthi123');
    registrationPage.checkAvailability();
    registrationPage.fillPassword('password123');
    registrationPage.fillRetypePassword('password123');
    registrationPage.fillAlternateEmail('test@gmail.com');
    registrationPage.selectSecurityQuestion('What is the name of your first school?');
    registrationPage.fillSecurityAnswer('test School');
    registrationPage.selectCountry('India');
    registrationPage.fillMobileNumber('9876543210');
    registrationPage.clickCreateMyAccount();

  });
});
