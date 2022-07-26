import { login } from "../fonctions/fonctions";


describe('Connexion des différents Profils', function () {

this.beforeEach(function(){
  cy.visit('/');
  cy.url().should('include', 'login');
  cy.fixture('utilisateurs.json').then((data) => data.utilisateurs).as('utilisateur')
})
  it('connexion Commercial', () => {
    login('COM')
    cy.url().wait(1000).should('include', 'menu');
  });
  it('connexion Mecanicien', () => {
   login('MECA')
    cy.url().wait(1000).should('include', 'menu');
  });
  it('connexion Chef d atelier', () => {
    login('CHEF')
    cy.url().wait(1000).should('include', 'menu');
  });
  it('connexion Magasinier', () => {
    login('MAG')
    cy.url().wait(1000).should('include', 'menu');
  });
  it('connexion Administrateur', () => {
    login('ADMIN')
    cy.url().wait(1000).should('include', 'menu');
  });
});
