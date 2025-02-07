// cypress/e2e/petstore_api_spec.js

describe('Swagger Petstore API Tests', () => {
    const baseUrl = 'https://petstore.swagger.io/v2';
    const petId = 1001; // Common petId for reuse
  
    it('Should add a new pet successfully', () => {
      cy.request({
        method: 'POST',
        url: `${baseUrl}/pet`,
        body: {
          id: petId,
          category: { id: 1, name: 'Dog' },
          name: 'petdog',
          tags: [{ id: 1, name: 'tiger' }],
          status: 'available',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('petdog');
      });
    });
  
    it('Should upload a file for a pet', () => {
      const formData = new FormData();
      formData.append(
        'file',
        new Blob(['Sample file content'], { type: 'text/plain' }),
        'testFile.txt'
      );
  
      cy.request({
        method: 'POST',
        url: `${baseUrl}/pet/${petId}/uploadImage`,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        body: formData,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log('Upload Response:', response.body);
      });
    });
  
    it('Should update an existing pet successfully', () => {
      cy.request({
        method: 'PUT',
        url: `${baseUrl}/pet`,
        body: {
          id: petId,
          category: { id: 1, name: 'Dog' },
          name: 'newpet',
          tags: [{ id: 1, name: 'rocky' }],
          status: 'sold',
        },
        headers: {
          'Content-Type': 'application/json',
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.name).to.eq('newpet');
        expect(response.body.status).to.eq('sold');
      });
    });
  
    it('Should fetch the pet details successfully', () => {
      cy.request({
        method: 'GET',
        url: `${baseUrl}/pet/${petId}`,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.id).to.eq(petId);
      });
    });
  
    it('Should delete the pet using API key and ID', () => {
      cy.request({
        method: 'DELETE',
        url: `${baseUrl}/pet/${petId}`,
        headers: {
          'api_key': 'special-key', // Add API key if required
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.code).to.eq(200);
      });
    });
  });
  