/// <reference types="Cypress" />

context('Main page', () => {
  beforeEach(() => {
    // cy.visit('/')
  })

  it('Renders search bar with text', () => {
    cy.visit('/')
    cy.findByPlaceholderText(/type to filter/i)
  })

  it('Show modal when card is clicked, then close it', () => {
    cy.findAllByTestId(/nat-/)
      .first()
      .click()
      .findByText(/location/i)
      .findByText(/contact/i)
      .findByTestId('modal')
      .click(1, 1, { force: true })
      .queryByText(/location/i, { timeout: 50 })
      .queryByText(/contact/i, { timeout: 50 })
      .should('not.exist')
  })

  it('Renders list of 50 user cards', () => {
    cy.findAllByTestId(/^nat-/).should('have.length', 50)
  })

  it('After scroll to bottom we see 100 user cards', () => {
    cy.scrollTo(0, '100%')
      .findAllByTestId(/^nat-/)
      .should('have.length', 100)
  })

  it('After non-existent user search we should see no cards', () => {
    cy.findByPlaceholderText(/type to filter/i)
      .as('search')
      .type('thisoneshouldnotbefound')
      .findAllByTestId(/^nat-/)
      .should('have.length', 0)
  })

  it('Should show back cards after pressing ESC', () => {
    cy.findByPlaceholderText(/type to filter/i)
      .type('{esc}')
      .findAllByTestId(/^nat-/)
      .should('have.length', 100)
  })
})
