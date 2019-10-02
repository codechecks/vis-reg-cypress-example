describe('Google', function() {
  it('is looking good', function() {
    cy.visit("https://google.pl");
    cy.screenshot();
  })
})