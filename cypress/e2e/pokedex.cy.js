const API_BASE_PATH = 'http://localhost:5000'

describe('template spec', () => {
  it('front page can be opened', function() {
    cy.visit(API_BASE_PATH)
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  }),
  it('a specific pokemon page can be visited', function() {
    const pokemon = 'ivysaur'
    cy.visit(API_BASE_PATH)
    cy.contains(pokemon)
    cy.contains(pokemon).click()
    cy.contains('chlorophyll')
  })
})