

describe('JSONPlaceholder API Tests', () => {

    const baseUrl = 'https://jsonplaceholder.typicode.com';
  
    it('GET - Retrieve all posts', () => {
      cy.request(`${baseUrl}/posts`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.length(100);
        expect(response.body[0]).to.have.property('title');
      });
    });
  
    it('POST - Create a new post', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/posts`,
        body: {
          title: 'Cypress Test Post',
          body: 'This is a post created by Cypress.',
          userId: 1,
        },
      }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body).to.have.property('id');
        expect(response.body.title).to.eq('Cypress Test Post');
      });
    });
  
    it('PUT - Update an existing post', () => {
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/posts/1`,
        body: {
          id: 1,
          title: 'Updated Title',
          body: 'Updated body content.',
          userId: 1,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.title).to.eq('Updated Title');
      });
    });
  
    it('DELETE - Delete a post', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/posts/1`,
      }).then((response) => {
        expect(response.status).to.eq(200);
      });
    });
  
  });
  