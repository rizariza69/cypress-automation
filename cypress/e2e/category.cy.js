
describe('Feature category test' , () => {


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

    cy.get('[href="/categories"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q')
      .click()
      .contains('kategori')

    cy.get('.css-1piskbq')
      .click()
    
    cy.get('#nama').type('kategorites222222').should('be.visible')
    cy.get('#deskripsi').type('lorem ipsum lorem ipsum').should('be.visible')
    cy.contains('simpan').click()

  

    cy.get('#chakra-toast-manager-top-right').should('contain','success')
    cy.contains('kategori')

  });

  it('UnSuccessfull create new product empty name', () => {
    cy.visit(`/`)

    cy.get('#email')
      .type('riza@yopmail.com')
      .should('be.visible')

    cy.get('#password')
      .type('password')

    cy.contains('login')
      .click()

    cy.url().should('include', '/dashboard');

    cy.get('[href="/categories"] > .css-ewi1jp > .css-1xhj18k > .css-1mqa38q')
      .click()
      .contains('kategori')

    cy.get('.css-1piskbq')
      .click()
    
    cy.get('#nama').type(' ').should('be.visible')
    cy.get('#deskripsi').type(' ').should('be.visible')
    cy.contains('simpan').click()

    cy.get('.chakra-alert')
    .should('contain', 'is not allowed to be empty');

  });



})