describe('template spec', () => {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  }),
  it('a specific pokemon page can be visited', function() {
    const pokemon = 'ivysaur'
    cy.visit('http://localhost:5000')
    cy.contains(pokemon)
    cy.contains(pokemon).click()
    cy.contains('chlorophyll')
  })
})