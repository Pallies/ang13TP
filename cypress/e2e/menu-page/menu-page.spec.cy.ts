import { buttonContains, login } from "../fonctions/fonctions";

describe('menu pour les différents profils', function () {
  this.beforeEach(function(){
    cy.visit('/');
  })
  it('menu Commercial', () => {
    login('COM')
    cy.url().should('include', 'menu');
    cy.get('button').should('have.length',2)
    cy.get('button').then(($button)=>{
      buttonContains($button,'COM')
    })
  });
  it('menu Mecanicien', () => {
    login('MECA')
    cy.url().should('include', 'menu');
    cy.get('button').should('have.length',2)
    cy.get('button').then(($button)=>{
      buttonContains($button,'MECA')
    })
  });
  it('menu Chef d atelier', () => {
    login('CHEF')
    cy.url().should('include', 'menu');
    cy.get('button').should('have.length',4)
    cy.get('button').then(($button)=>{
      buttonContains($button,'CHEF')
    })
  });
  it('menu Magasinier', () => {
    login('MAG')
    cy.url().should('include', 'menu');
    cy.get('button').should('have.length',3)
    cy.get('button').then(($button)=>{
      buttonContains($button,'MAG')
    })
  });
  it('menu Administrateur', () => {
    login('ADMIN')
    cy.url().should('include', 'menu');
    cy.get('button').should('have.length',6)
    cy.get('button').then(($button)=>{
      buttonContains($button,'ADMIN')
    })
  });
});


