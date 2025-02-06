// RESTful Booker API Tests
describe('RESTful Booker API Tests', () => {

    let token;
    let bookingId;
  
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
  
  });
  
