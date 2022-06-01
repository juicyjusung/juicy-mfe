describe('host', () => {
  beforeEach(() => cy.visit('/'));
  it('should has both of apps', () => {
    cy.contains('App1Main!');
    cy.contains('App2Main!');
  });
});
