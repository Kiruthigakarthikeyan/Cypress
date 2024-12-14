class RegistrationPage {
    visit() {
      cy.visit('http://register.rediff.com/register/register.php?FormName=user_details');
    }
  
    fillFirstName(firstName) {
      cy.get('input[name="name"]').type(firstName);
    }
  
    fillRediffID(rediffID) {
      cy.get('input[name="login"]').type(rediffID);
    }
  
    checkAvailability() {
      cy.get('input[type="button"][value="Check availability"]').click();
    }
  
    fillPassword(password) {
      cy.get('input[name="passwd"]').type(password);
    }
  
    fillRetypePassword(password) {
      cy.get('input[name="confirm_passwd"]').type(password);
    }
  
    fillAlternateEmail(email) {
      cy.get('input[name="altemail"]').type(email);
    }
  
    selectSecurityQuestion(question) {
      cy.get('select[name="hint"]').select(question);
    }
  
    fillSecurityAnswer(answer) {
      cy.get('input[name="hintans"]').type(answer);
    }
  
    selectCountry(country) {
      cy.get('select[name="country"]').select(country);
    }
  
    fillMobileNumber(mobileNumber) {
      cy.get('input[name="mobno"]').type(mobileNumber);
    }
  
    clickCreateMyAccount() {
      cy.get('input[type="submit"][value="Create my account"]').click();
    }
  }
  
  export default RegistrationPage;