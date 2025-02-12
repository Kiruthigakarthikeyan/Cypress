describe('DesiCrew Website Automation', () => {
    const expectedMenuItems = [
      'Software Testing',
      'Computer Vision',
      'IT Automation',
      'LLM Support Services',
      'Finance & Accounting'
    ];
  
    const businessVerticalsItems = [
      'QAonCloud',
      'DAL',
      'AIOps',
      'DHISHA',
      'Accountifi',
      'BPM'
    ];
  
    const aboutUsItems = [
      'Company Profile',
      'Careers',
  //    'People',
      'Connect'
    ];
  
    const knowledgeBaseItems = [
      'Case Studies',
      'Media'
    ];
  
    const keywordsMap = {
      'Software Testing': ['Software Testing'],
      'Computer Vision': ['Computer Vision'],
      'IT Automation': ['IT Automation'],
      'LLM Support Services': ['LLM Support Services'],
      'Finance & Accounting': ['Finance & Accounting'],
      'QAonCloud': ['QAonCloud'],
      'DAL': ['DAL'],
      'AIOps': ['AIOps'],
      'DHISHA': ['DHISHA'],
      'Accountifi': ['Accountifi'],
      'BPM': ['BPM'],
      'Company Profile': ['Transforming businesses with excellence'],
      'Careers': ['Together, we’re a force for good'],
    //  'People': ['People'],
      'Connect': ['Connect with us'],
      'Case Studies': ['Case Studies'],
      'Media': ['Media']
    };
  
    beforeEach(() => {
      cy.viewport(3000, 2000);
      cy.visit('https://desicrew.in/');
    });
  
    it('Should load the homepage', () => {
      cy.url().should('include', 'desicrew.in');
      cy.title().should('include', 'DesiCrew');
    });
  
    it('Check Solutions dropdown and navigate through items', () => {
      const openSolutionsMenu = () => {
        cy.contains('Solutions')
          .trigger('mouseover')
          .click({ force: true });
        cy.get('.sub-menu', { timeout: 5000 }).should('be.visible');
      };
  
      openSolutionsMenu();
  
      expectedMenuItems.forEach(item => {
        cy.contains(item).should('be.visible');
      });
  
      expectedMenuItems.forEach((item) => {
        cy.contains('a', new RegExp(`^${item}$`, 'i'), { timeout: 10000 })
          .should('be.visible')
          .invoke('attr', 'href')
          .then((href) => {
            cy.contains('a', item).click({ force: true });
            cy.url().should('include', href);
  
            const keywords = keywordsMap[item];
  
            cy.get('h1, h2', { timeout: 10000 }).then(($heading) => {
              const content = $heading.length ? $heading.text().trim() : '';
  
              if (!keywords.includes(content)) {
                cy.get('body', { timeout: 10000 }).invoke('text').then((bodyText) => {
                  const found = keywords.some(keyword => bodyText.includes(keyword));
                  expect(found, `Expected to find '${keywords.join(', ')}' on the page.`).to.be.true;
                });
              } else {
                expect(keywords.includes(content)).to.be.true;
              }
            });
  
            cy.visit('https://desicrew.in/');
            openSolutionsMenu();
          });
      });
    });
  
    it('Check Business Verticals dropdown and navigate through items', () => {
      const openBusinessVerticalsMenu = () => {
        cy.contains('Business Verticals')
          .trigger('mouseover')
          .click({ force: true });
        cy.get('.sub-menu', { timeout: 5000 }).should('be.visible');
      };
  
      openBusinessVerticalsMenu();
  
      businessVerticalsItems.forEach(item => {
        cy.contains(item).should('be.visible');
      });
  
      businessVerticalsItems.forEach((item) => {
        cy.contains('a', new RegExp(`^${item}$`, 'i'), { timeout: 10000 })
          .should('be.visible')
          .invoke('attr', 'href')
          .then((href) => {
            cy.contains('a', item).click({ force: true });
            cy.url().should('include', href);
  
            const keywords = keywordsMap[item];
  
            cy.get('h1, h2', { timeout: 10000 }).then(($heading) => {
              const content = $heading.length ? $heading.text().trim() : '';
  
              if (!keywords.includes(content)) {
                cy.get('body', { timeout: 10000 }).invoke('text').then((bodyText) => {
                  const found = keywords.some(keyword => bodyText.includes(keyword));
                  expect(found, `Expected to find '${keywords.join(', ')}' on the page.`).to.be.true;
                });
              } else {
                expect(keywords.includes(content)).to.be.true;
              }
            });
  
            cy.visit('https://desicrew.in/');
            openBusinessVerticalsMenu();
          });
      });
    });
  
    it('Check About Us dropdown and navigate through items', () => {
      const openAboutUsMenu = () => {
        cy.contains('About Us')
          .trigger('mouseover')
          .click({ force: true });
        cy.get('.sub-menu', { timeout: 5000 }).should('be.visible');
      };
  
      openAboutUsMenu();
  
      aboutUsItems.forEach(item => {
        cy.contains(item).should('be.visible');
      });
  
      aboutUsItems.forEach((item) => {
        cy.contains('a', new RegExp(`^${item}$`, 'i'), { timeout: 10000 })
          .should('be.visible')
          .invoke('attr', 'href')
          .then((href) => {
            cy.contains('a', item).click({ force: true });
            cy.url().should('include', href);
  
            const keywords = keywordsMap[item];
  
            cy.get('h1, h2', { timeout: 10000 }).then(($heading) => {
              const content = $heading.length ? $heading.text().trim() : '';
  
              if (!keywords.includes(content)) {
                cy.get('body', { timeout: 10000 }).invoke('text').then((bodyText) => {
                  const found = keywords.some(keyword => bodyText.includes(keyword));
                  expect(found, `Expected to find '${keywords.join(', ')}' on the page.`).to.be.true;
                });
              } else {
                expect(keywords.includes(content)).to.be.true;
              }
            });
  
            cy.visit('https://desicrew.in/');
            openAboutUsMenu();
          });
      });
    });
  
    it('Check Knowledge Base dropdown and navigate through items', () => {
      const openKnowledgeBaseMenu = () => {
        cy.contains('Knowledge Base')
          .trigger('mouseover')
          .click({ force: true });
        cy.get('.sub-menu', { timeout: 5000 }).should('be.visible');
      };
  
      openKnowledgeBaseMenu();
  
      knowledgeBaseItems.forEach(item => {
        cy.contains(item).should('be.visible');
      });
  
      knowledgeBaseItems.forEach((item) => {
        cy.contains('a', new RegExp(`^${item}$`, 'i'), { timeout: 10000 })
          .should('be.visible')
          .invoke('attr', 'href')
          .then((href) => {
            cy.contains('a', item).click({ force: true });
            cy.url().should('include', href);
  
            const keywords = keywordsMap[item];
  
            cy.get('h1, h2', { timeout: 10000 }).then(($heading) => {
              const content = $heading.length ? $heading.text().trim() : '';
  
              if (!keywords.includes(content)) {
                cy.get('body', { timeout: 10000 }).invoke('text').then((bodyText) => {
                  const found = keywords.some(keyword => bodyText.includes(keyword));
                  expect(found, `Expected to find '${keywords.join(', ')}' on the page.`).to.be.true;
                });
              } else {
                expect(keywords.includes(content)).to.be.true;
              }
            });
  
            cy.visit('https://desicrew.in/');
            openKnowledgeBaseMenu();
          });
      });
    });
    it('Check Software Testing page content and button', () => {
        cy.contains('Solutions').trigger('mouseover').click({ force: true });
        cy.contains('Software Testing').click({ force: true });
    
        cy.url().should('include', '/software-testing');
    
        cy.get('body', { timeout: 10000 }).invoke('text').then((bodyText) => {
          expect(bodyText).to.include('Software Testing');
        });
    
        cy.contains('span.elementor-button-text', 'Explore our Service')
          .should('be.visible')
          .parent('a')
          .should('have.attr', 'href', 'https://www.qaoncloud.com');
      });
  });
  