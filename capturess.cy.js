describe('Screenshots and Videos',()=>{

    it('Manual Screenshots',()=>{
    cy.visit('https://www.opencart.com/');
    cy.screenshot("Homepage");          //  Capture entire page and name the screen shot
    cy.get(".navbar-header").screenshot("Logo");  // capture specific element
    })
    
    })