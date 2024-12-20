describe('File download', function () {

    it('File Download', () => {
        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt',
            'cypress/fixtures/Download', 'test.txt')
        
    })
})