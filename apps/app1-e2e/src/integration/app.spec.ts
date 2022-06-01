import { getGreeting } from '../support/app.po';

describe('app1', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    cy.contains('App1Main!');
  });
});
