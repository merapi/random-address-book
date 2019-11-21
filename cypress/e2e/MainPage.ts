/// <reference types="Cypress" />

context('Main page', () => {
  beforeEach(() => {
    // cy.visit('/')
  })

  it('Renders search bar with text', () => {
    cy.visit('/')
    cy.findByPlaceholderText(/type to search/i)
  })

  it('Show modal when card is clicked, then close it', () => {
    cy.findAllByTestId(/nat-/)
      .first()
      .click()
      .findByText(/location/i)
      .findByText(/contact/i)
      .get('body')
      .click(1, 1, { force: true })
      .queryByText(/location/i, { timeout: 50 })
      .queryByText(/contact/i, { timeout: 50 })
      .should('not.exist')
  })

  it('Renders list of 50 user cards', () => {
    cy.findAllByTestId(/^nat-/).should('have.length', 50)
  })
})
