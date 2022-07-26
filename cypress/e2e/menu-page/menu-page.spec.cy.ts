
describe('menu pour l administateur', function () {
  this.beforeAll(function(){
 cy.visit('/');
  cy.url().should('include', 'login');
    cy.fixture('utilisateurs.json').then((data) =>
    data.utilisateurs).as('utilisateur')
  })

  it('connexion Administrateur', () => {
    cy.get('button').should('have.length',3)
    cy.visit('/menu');
    cy.get('button').then(($button)=>{
      expect($button.get(0).innerText).to.eq('Gestion des clients')
      expect($button.get(1).innerText).to.eq('Gestion des ventes de véhicules')
      expect($button.get(2).innerText).to.eq('Gestion des utilisateurs')
    })
  });
});
