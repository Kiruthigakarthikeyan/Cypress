describe('QAonCloud Website Tests', () => {
    beforeEach(() => {
      cy.visit('https://www.qaoncloud.com');
    });
  
    it('should display the Header', () => {
      cy.get('header').should('be.visible');
      cy.get('header nav').should('exist');
      cy.get('header').contains('QAonCloud').should('be.visible');
    });
  
    it('should display the Banner', () => {
      cy.get('.banner').should('be.visible');
      cy.get('.banner').contains('Quality Assurance').should('be.visible');
    });
  
    it('should display "What QAonCloud Offers"', () => {
      cy.contains('What QAonCloud Offers').should('be.visible');
      cy.get('.offerings').should('exist');
    });
  
    it('should display "We Love To Help Craft Quality Software"', () => {
      cy.contains('We Love To Help Craft Quality Software').should('be.visible');
      cy.get('.craft-quality-software').should('exist');
    });
  
    it('should display "Why QAonCloud"', () => {
      cy.contains('Why QAonCloud').should('be.visible');
      cy.get('.why-qaoncloud').should('exist');
    });
  
    it('should display "How It Works"', () => {
      cy.contains('How It Works').should('be.visible');
      cy.get('.how-it-works').should('exist');
    });
  
    it('should display "How We Help"', () => {
      cy.contains('How We Help').should('be.visible');
      cy.get('.how-we-help').should('exist');
    });
  
    it('should display "Key Milestones"', () => {
      cy.contains('Key Milestones').should('be.visible');
      cy.get('.key-milestones').should('exist');
    });
  
    it('should display "Blogs and Resources"', () => {
      cy.contains('Blogs and Resources').should('be.visible');
      cy.get('.blogs-resources').should('exist');
    });
  
    it('should display the Footer', () => {
      cy.get('footer').should('be.visible');
      cy.get('footer').contains('QAonCloud').should('be.visible');
      cy.get('footer nav').should('exist');
    });
  });