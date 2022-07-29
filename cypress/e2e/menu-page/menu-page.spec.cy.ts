import { buttonContains, login } from "../fonctions/fonctions";

describe('menu pour les différents profils', function () {
  this.beforeEach(function(){
    cy.visit('/');
    cy.url().wait(1000).should('include', 'login');
    cy.fixture('utilisateurs.json').then((data) => data.utilisateurs).as('utilisateur')
  })
  it('menu Commercial', () => {
    login('COM')
    cy.url().wait(1000).should('include', 'menu');
    cy.get('button').should('have.length',3)
    cy.get('button').then(($button)=>{
      buttonContains($button,'COM')
    })
  });
  it('menu Mecanicien', () => {
    login('MECA')
    cy.url().wait(1000).should('include', 'menu');
    cy.get('button').should('have.length',2)
    cy.get('button').then(($button)=>{
      buttonContains($button,'MECA')
    })
  });
  it('menu Chef d atelier', () => {
    login('CHEF')
    cy.url().wait(1000).should('include', 'menu');
    cy.get('button').should('have.length',5)
    cy.get('button').then(($button)=>{
      buttonContains($button,'CHEF')
    })
  });
  it('menu Magasinier', () => {
    login('MAG')
    cy.url().wait(1000).should('include', 'menu');
    cy.get('button').should('have.length',4)
    cy.get('button').then(($button)=>{
      buttonContains($button,'MAG')
    })
  });
  it('menu Administrateur', () => {
    login('ADMIN')
    cy.url().wait(1000).should('include', 'menu');
    cy.get('button').should('have.length',7)
    cy.get('button').then(($button)=>{
      buttonContains($button,'ADMIN')
    })
  });
});


