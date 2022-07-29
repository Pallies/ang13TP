import { buttonContains, login } from "../fonctions/fonctions";

describe('navigation pour le profils', function () {
  this.beforeEach(function(){
    cy.visit('/');
    cy.url().wait(1000).should('include', 'login');
    cy.fixture('utilisateurs.json').then((data) => data.utilisateurs).as('utilisateur')
  })
  it('menu Commercial', () => {
    login('COM')


  });
});
