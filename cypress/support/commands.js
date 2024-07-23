

Cypress.Commands.add('openURL', () => {
    cy.visit('http://localhost:8000/QE-index.html');
  });
  
  beforeEach(() => {
    cy.openURL();
  });