
describe('Feature product test' , () => {


  it('Successfull create new product', () => {
    cy.visit(`/`)

    cy.get('#email')
      .type('riza@yopmail.com')
      .should('be.visible')

    cy.get('#password')
      .type('password')

    cy.contains('login')
      .click()

    cy.url().should('include', '/dashboard');

    cy.get(':nth-child(9) > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q')
      .click()
      .contains('pelanggan')

    cy.get('.css-1piskbq')
      .click()
    
    cy.get('#nama').type('testes3')
    cy.get('#alamat').type('lorem ipsum lorem ipsum')
    cy.get('#keterangan').type('keterangan keterangan')
    cy.contains('simpan').click()

  

    cy.get('#chakra-toast-manager-top-right').should('contain','success')
    cy.contains('pelanggan')

  });



})