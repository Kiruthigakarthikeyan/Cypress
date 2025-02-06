describe('SQL Database Testing in Cypress', () => {

    // Hook to create the table before running tests
    before(() => {
        cy.task('queryDb', `CREATE TABLE IF NOT EXISTS Persons (
            PersonID INT PRIMARY KEY, 
            FirstName VARCHAR(255), 
            Address VARCHAR(255), 
            City VARCHAR(255)
        )`);
    });

    // Hook to clean up after tests
    after(() => {
        cy.task('queryDb', `DROP TABLE IF EXISTS Persons`);
    });

    it('should insert multiple entries into the table', () => {
        const insertQuery = `INSERT INTO Persons (PersonID, FirstName, Address, City) VALUES
            (1, 'John', 'House No. 01', 'Helsinki'),
            (2, 'Pam', 'House No. 02', 'Espoo'),
            (3, 'Dwight', 'House No. 03', 'Lapland'),
            (4, 'Michael', 'House No. 04', 'Vantaa')`;

        cy.task('queryDb', insertQuery).then((result) => {
            expect(result.affectedRows).to.equal(4);
        });
    });

    it('should update an entry and verify the changes', () => {
        const updateQuery = `UPDATE Persons SET FirstName = 'Kevin' WHERE City = 'Vantaa'`;
        const selectQuery = `SELECT FirstName FROM Persons WHERE City = 'Vantaa'`;

        cy.task('queryDb', updateQuery).then((result) => {
            expect(result.changedRows).to.equal(1);
        });

        cy.task('queryDb', selectQuery).then((result) => {
            expect(result[0].FirstName).to.equal('Kevin');
        });
    });

    it('should verify there is only one entry for the city "Espoo"', () => {
        const countQuery = `SELECT COUNT(*) AS rowCount FROM Persons WHERE City = 'Espoo'`;

        cy.task('queryDb', countQuery).then((result) => {
            expect(result[0].rowCount).to.equal(1);
        });
    });

    it('should delete an entry and verify its removal', () => {
        const deleteQuery = `DELETE FROM Persons WHERE City = 'Lapland'`;
        const verifyQuery = `SELECT COUNT(*) AS rowCount FROM Persons WHERE City = 'Lapland'`;

        cy.task('queryDb', deleteQuery).then((result) => {
            expect(result.affectedRows).to.equal(1);
        });

        cy.task('queryDb', verifyQuery).then((result) => {
            expect(result[0].rowCount).to.equal(0);
        });
    });

});
