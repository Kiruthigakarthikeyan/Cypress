/// <reference types="cypress" />

Cypress.on('uncaught:exception', (err) => {
    console.error('Uncaught Exception:', err.message);
    return false;
  });
  
  describe("Automate the UltimateQA Website", () => {
    beforeEach(() => {
      cy.visit("https://ultimateqa.com/complicated-page");
    });
  
    it("Verifies page elements and submits forms", () => {
      cy.get('.et_pb_button.et_pb_button_0.et_pb_bg_layout_light').click();
      cy.get('.et_pb_button.et_pb_button_3.et_pb_bg_layout_light').click();
  
      // First form
      cy.get('#et_pb_contact_name_0').type('Janaki');
      cy.get('#et_pb_contact_email_0').type('janakinavanee@gmail.com');
      cy.get('#et_pb_contact_message_0').type('This is a test code to verify this is text box');
      cy.get('#et_pb_contact_form_0 .et_pb_contact_submit').click();
  
      // Second form
      cy.get('#et_pb_contact_name_1').type('Navaneeth');
      cy.get('#et_pb_contact_email_1').type('navi7ravi@gmail.com');
      cy.get('#et_pb_contact_message_1').type('This is test message for contact Navaneeth');
      cy.get('#et_pb_contact_form_1 .et_pb_contact_submit').click();
    });
  
    it("Navigates through main menu and education tab", () => {
      cy.get('#menu-main-menu > #menu-item-218392 > a').first().click();
      cy.get('#menu-main-menu > #menu-item-217940 > a').first().click();
      cy.get('#menu-main-menu > #menu-item-218226 > a').first().click();
      cy.get('#menu-main-menu > #menu-item-218225 > [href="#"]').contains('Education').trigger('mouseover');
      cy.get('nav ul li:nth-child(5) > a').click();
    });
  
    it("Searches and selects a course", () => {
      cy.visit('https://courses.ultimateqa.com/collections');
      cy.get('li:nth-child(1) > a h3').click();
      cy.get('.logo.img-responsive').click();
      cy.get(':nth-child(3) > .pagination__page-number').click();
     // cy.get(':nth-child(2) > .card > .card__body').click();
     cy.get(':nth-child(2) > .card > .card__body', { timeout: 10000}).click();
      cy.get('.course-curriculum__chapter-header').click();
      cy.get('.pricing-table__list-item > .button').click();
    });
  
    it("Enrolls in a course", () => {
        cy.wait(4000);
      cy.get('#account-info-email').type('janakinavanee@gmail.com');
      cy.get('#input-2').type('Janaki');
      cy.get("#terms-and-privacy-checkbox").check({ force: true });
      cy.get('.top-drawer__label').click().click();
    });
  
    it("Verifies footer elements and social media links", () => {
      cy.get('#menu-footer-main-menu > #menu-item-218099 > a').click();
      cy.get('#et_pb_contact_name_0').type('Janaki');
      cy.get('#et_pb_contact_email_0').type('janakinavanee@gmail.com');
      cy.get('#et_pb_contact_message_0').should('be.visible').type('Thank you for this great website to enrich our learning capabilities', { force: true });
      cy.get('#menu-footer-main-menu > #menu-item-218097 > a').click();
      cy.get('.et_pb_social_media_follow_network_0_tb_footer > .icon').click();
      cy.wait(2000);
      cy.get('.et_pb_social_media_follow_network_1_tb_footer > .icon').click();
    });
  
    it("Interacts with page elements", () => {
      cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 .lwptoc_toggle_label').click();
    });
  });
  
