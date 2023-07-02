
describe('web https://kasirdemo.belajarqa.com test login ', () => {

  it('successfully loads url', () => {
    cy.visit('/')
  })

  it('successfully login', () => {
    cy.visit(`/`)

    cy.get('#email')
      .type('riza@yopmail.com')
      .should('be.visible')

    cy.get('#password')
      .type('password')

    cy.contains('login')
      .click()

    cy.url().should('include', '/dashboard');

    cy.contains('kasirAja')

  })


  it('unsuccessfull login, wrong password', () => {
    cy.visit(`/`)

    cy.get('#email')
      .type('riza@yopmail.com')
      .should('be.visible')

    cy.get('#password')
      .type('zxzx')

    cy.contains('login')
      .click()
    
    cy.get('.chakra-alert').should('contain', 'Kredensial yang Anda berikan salah');

    cy.url().should('not.include', '/dashboard');

  })
  it('unsuccessfull login, wrong email', () => {
    cy.visit(`/`)

    cy.get('#email')
      .type('riza@yopi.com')
      .should('be.visible')

    cy.get('#password')
      .type('password')

    cy.contains('login')
      .click()
    
    cy.get('.chakra-alert').should('contain', 'Kredensial yang Anda berikan salah');

    cy.url().should('not.include', '/dashboard');

  })


})