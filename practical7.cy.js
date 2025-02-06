// RESTful Booker API Tests

describe('RESTful Booker API Tests', () => {

    let token;
    let bookingId;
  
    it('Health Check', () => {
      cy.request('https://restful-booker.herokuapp.com/ping').then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  
    it('Create Token', () => {
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/auth',
        body: {
          username: 'admin',
          password: 'password123'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        token = response.body.token;
        expect(token).to.not.be.empty;
      });
    });
  
    it('Get Booking IDs', () => {
      cy.request('https://restful-booker.herokuapp.com/booking').then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.be.an('array');
        bookingId = response.body[0].bookingid;
      });
    });
  
    it('Get Booking by ID', () => {
      cy.request(`https://restful-booker.herokuapp.com/booking/${bookingId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('firstname');
      });
    });
  
    it('Create Booking', () => {
      cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/booking',
        headers: {
          'Content-Type': 'application/json'
        },
        body: {
          firstname: 'John',
          lastname: 'Doe',
          totalprice: 150,
          depositpaid: true,
          bookingdates: {
            checkin: '2024-02-01',
            checkout: '2024-02-05'
          },
          additionalneeds: 'Breakfast'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property('bookingid');
        bookingId = response.body.bookingid;
      });
    });
  
    it('Update Booking', () => {
      cy.request({
        method: 'PUT',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': `token=${token}`
        },
        body: {
          firstname: 'Jane',
          lastname: 'Smith',
          totalprice: 200,
          depositpaid: false,
          bookingdates: {
            checkin: '2024-03-01',
            checkout: '2024-03-05'
          },
          additionalneeds: 'Lunch'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.firstname).to.eq('Jane');
      });
    });
  
    it('Partial Update Booking', () => {
      cy.request({
        method: 'PATCH',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Cookie': `token=${token}`
        },
        body: {
          firstname: 'UpdatedName'
        }
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.firstname).to.eq('UpdatedName');
      });
    });
  
    it('Delete Booking', () => {
      cy.request({
        method: 'DELETE',
        url: `https://restful-booker.herokuapp.com/booking/${bookingId}`,
        headers: {
          'Cookie': `token=${token}`
        }
      }).then((response) => {
        expect(response.status).to.eq(201);
      });
    });
  
  });
  