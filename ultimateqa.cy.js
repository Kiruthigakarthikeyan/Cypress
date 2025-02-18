import 'cypress-iframe'

/// <reference types="cypress" />
Cypress.on('uncaught:exception', (err, runnable) => {
    // Handle the exception as needed
    console.error('Uncaught Exception:', err.message);
    // Return false to prevent the unhandled exception from failing the test
    return false;
  });



describe("Automate the Ultimateqa Website",()=>{
   
    it("Visit the application and verify all the elements",()=>{
      cy.visit("https://ultimateqa.com/complicated-page");

      cy.get('.et_pb_button.et_pb_button_0.et_pb_bg_layout_light').click();
      cy.get('.et_pb_button.et_pb_button_3.et_pb_bg_layout_light').click();
        //Login in the first form
      cy.get('#et_pb_contact_name_0').type('Kiruthiga')
      cy.wait(1000);
      cy.get('#et_pb_contact_email_0').type('jkeerthi@gmail.com')
      cy.wait(1000);
      cy.get('#et_pb_contact_message_0').type('verify text box')
      cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').type('11').click();
      cy.get('#et_pb_contact_form_0 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').click();
      //Login in the second form
      
      cy.get('#et_pb_contact_name_1').type('Test')
      cy.get('#et_pb_contact_email_1').type('test@gmail.com')
      cy.get('#et_pb_contact_message_1').type('Test contact');
     
      cy.get('#et_pb_contact_form_1 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').type('7').click();
      cy.get('#et_pb_contact_form_1 > .et_pb_contact > .et_pb_contact_form > .et_contact_bottom_container > .et_pb_contact_right > .clearfix > .input').click();
      
    //Opening the tabs available
    cy.get('#menu-main-menu > #menu-item-218392 > a').click();
    cy.wait(2000);
    cy.get('#menu-main-menu > #menu-item-217940 > a').click();
    cy.wait(2000);
    cy.get('#menu-main-menu > #menu-item-218226 > a').click();
    cy.wait(2000);
    //Hover over the Education tab
    cy.get('#menu-main-menu > #menu-item-218225 > [href="#"]').contains('Education').trigger('mouseover');
    cy.get('body > div:nth-child(1) > div:nth-child(1) > header:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > nav:nth-child(1) > ul:nth-child(1) > li:nth-child(5) > a:nth-child(1)').click();

    cy.visit('https://courses.ultimateqa.com/collections');
    //cy.get("input[placeholder='Search']").type('Selenium');
    //Selecting any one of the free courses available
    cy.get('body > main:nth-child(4) > div:nth-child(1) > div:nth-child(4) > ul:nth-child(1) > li:nth-child(1) > a:nth-child(1) > div:nth-child(2) > div:nth-child(1) > h3:nth-child(1)').click();
    cy.get('.logo.img-responsive').click();
    //Moving to next page
    cy.get(':nth-child(3) > .pagination__page-number').click();
    //Selecting another course
    cy.get(':nth-child(2) > .card > .card__body-container > .card__body').click();
    cy.get(':nth-child(1) > .course-curriculum__chapter-content-wrapper > .course-curriculum__chapter-header').click();
    //Enrol to the course
    cy.get('.pricing-table__list-item > .button').click();
    //Entering details for course enrollment
    cy.get('#account-info-email').type('sam@gmail.com');
    cy.get('#input-2').type('Sam');
    cy.get("#terms-and-privacy-checkbox").check({ force: true });
   //   cy.get('.sc-bczRLJ').click();
    cy.get('.top-drawer__label').click();
    cy.get('.top-drawer__label').click();

    cy.visit('https://ultimateqa.com/complicated-page');
    
   //Checking the options in the page footer

   cy.get('#menu-footer-main-menu > #menu-item-218099 > a').click();
   cy.get('#et_pb_contact_name_0').type('John')
   cy.get('#et_pb_contact_email_0').type('john@gmail.com')
   cy.get('#et_pb_contact_message_0', { timeout: 10000 })
  .should('be.visible')
  .type('Thank you for this great website to enrich our learning capabilities', { force: true });
   //cy.get('#et_pb_contact_message_0').type('Thank you for this great website to enrich our learning capabilities')
   cy.get('#menu-footer-main-menu > #menu-item-218097 > a').click();
   //cy.get('#menu-footer-main-menu > #menu-item-218093 > a').click();
   cy.get('.et_pb_social_media_follow_network_0_tb_footer > .icon').click();
   cy.wait(2000);
   cy.get('.et_pb_social_media_follow_network_1_tb_footer > .icon').click();
   cy.wait(2000);
   cy.visit('https://ultimateqa.com/complicated-page');

   cy.get('.et_pb_column_10 > .et_pb_module > #lpwtoc_widget-2 > .lwptoc > .lwptoc_i > .lwptoc_header > .lwptoc_toggle > .lwptoc_toggle_label').click();






    })

})