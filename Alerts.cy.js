describe("Alerts", ()=>{

    it.only('SimpleAlerts', ()=>{
    
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
    
        cy.on("window:alert",(t) =>{
    
            expect(t).to.contains("I am a JS Alert")
    
        })
    
        cy.get("#result").should("have.text","You successfully clicked an alert")
    
    })
    
        it.skip('Confirmation Alerts -Ok ', ()=>{
    
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("button[onclick='jsConfirm()']").click()
    
            cy.on("window:Confirm",(t) => {
                expect.to.contains("I am a JS Alert")
            })
    
            cy.get("#result").should("have.text","You clicked: Ok")
    
        })
        
    
        it('Confirmation Alerts - Cancel  ', function(){
    
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
            cy.get("button[onclick='jsConfirm()']").click()
    
            // Triggering an event to validate the text in the Alert
    
            cy.on("window:Confirm",(t) => {
                expect.to.contains("I am a JS Alert")
            })
    
            // Closing the alert window by clicking the Cancel button
            
            cy.on('window:confirm', () => false)
            cy.get("#result").should("have.text","You clicked: Cancel")
    
        })
    
        it.skip("Prompt Alerts", function(){
    
            cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
           
            cy.window().then((win) => {
                cy.stub(win,"prompt").returns("Welcome")
                
            })
            cy.get("button[onclick='jsPrompt()']").click()
    
            // Cypress will automatically close the alert
    
            cy.get("#result").should("have.text","You entered: Welcome")
        })
    
    })