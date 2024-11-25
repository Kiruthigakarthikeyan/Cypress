describe('SingleselectradiobuttonTest1',() => {
    
    it('Selectradio button',() => {

      cy.visit("https://demo.guru99.com/test/radio.html")

      cy.get("#vfb-7-1").click()
  
      cy.get('input[type="radio"][value="Option 1"]').should('be.checked')
  
    })
  })