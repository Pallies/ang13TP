import { Utilisateur } from 'src/app/core/models/utilisateur';
import { before } from 'cypress/types/lodash';

describe('Connexion des différents Profils', function () {

this.beforeEach(function(){
  cy.visit('/');
  cy.url().should('include', 'login');
  cy.fixture('utilisateurs.json').then((data) => data.utilisateurs).as('utilisateur')
})
  it('connexion Commercial', () => {
    cy.get('@utilisateur').then((data:any)=>{
      cy.get('#mail').clear().type(data[0].email);
      cy.get('#password').clear().type(data[0].mdp);
    })
    cy.get('button').click();
    cy.url().should('include', 'menu');
  });
  it('connexion Mecanicien', () => {
    cy.get('@utilisateur').then((data:any)=>{
      cy.get('#mail').clear().type(data[1].email);
      cy.get('#password').clear().type(data[1].mdp);
    })
    cy.get('button').click();
    cy.url().should('include', 'menu');
  });
  it('connexion Chef d atelier', () => {
    cy.get('@utilisateur').then((data:any)=>{
      cy.get('#mail').clear().type(data[2].email);
      cy.get('#password').clear().type(data[2].mdp);
    })
    cy.get('button').click();
    cy.url().should('include', 'menu');
  });
  it('connexion Administrateur', () => {
    cy.get('@utilisateur').then((data:any)=>{
      cy.get('#mail').clear().type(data[3].email);
      cy.get('#password').clear().type(data[3].mdp);
    })
    cy.get('button').click();
    cy.url().should('include', 'menu');
  });
});
// cy.fixture('todo.json').then((todo) => {
//   cy.intercept('GET', '/todos/1', { body: todo }).as('todo')
//   // application requests the /todos/1 resource
//   // the intercept replies with the initial object

//   cy.wait('@todo').then(() => {
//     // modify the response object
//     todo.title = 'New data'
//     // and override the intercept
//     cy.intercept('GET', '/todos/1', { body: todo })
//   })
// })
// describe('Login to OrangeHRM website', function () {
//   before(function () {
//     cy.visit('https://opensource-demo.orangehrmlive.com/');
//     cy.fixture('testdata').then(function (testdata) {
//       this.testdata = testdata;
//     });
//   });

//   it('Validate successful Login', function () {
//     cy.get('#txtUsername').type(this.testdata.username);
//     cy.get('#txtPassword').type(this.testdata.password);
//     cy.get('#btnLogin').click();
//     cy.get('#welcome').contains(this.testdata.welcomeText);
//   });
// });
