describe("testcheckbox selection",function(){

    it("singleselectonebyone", function(){

        cy.visit("https://demo.guru99.com/test/radio.html")

        cy.get("input#vfb-6-0").check().should("be.checked")
        cy.get("input#vfb-6-1").check().should("be.checked")
        cy.get("input#vfb-6-1").check().should("be.checked")

    })

    it("Multipleselection",function(){

        cy.visit("https://demo.guru99.com/test/radio.html")
        cy.get('input[type="checkbox"]').check().should("be.checked")
    

    })
})