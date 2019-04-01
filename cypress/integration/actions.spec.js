/// <reference types="Cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8081')
  })

  it('type text in a search field', () => {
    cy.get('.search__field').type('Search text')
      .should('have.value', 'Search text')
  })  

  it('radio input sholuld be checked after click on label', () => {

    cy.get('[for="search-type-title"]').click()
      .prev().should('be.checked')

  })
})
