describe('Login Page', () => {
  it('Visits the initial project page', () => {
    cy.visit('/');
    cy.url().should('include', 'login');
    cy.contains('Login');

    // navbar
    cy.get('.navbar').contains('NOM ENTREPRISE');
    cy.get('.navbar')
      .children('#image')
      .should('have.class', 'd-inline-block align-top');
    cy.get('#svg').wait(1000).should('have.class', 'bi-person-circle');

    // mail password
    cy.get('#mailLabel').should(($div) => {
      expect($div.get(0).innerText).contains('Adresse email');
    });
    // label password
    cy.get('#passwordLabel').should(($div) => {
      expect($div.get(0).innerText).contains('Mot de passe');
    });
    // message d'erreur
    cy.get('#mail').clear();
    cy.get('#password').clear();
    cy.get('[type="submit"]').wait(1000).click();

    cy.get('.invalid-feedback').should('have.length', 2);

    cy.get('.invalid-feedback').wait(1000).should(($div) => {
      expect($div.get(0).innerText).to.equals(
        'Le champ doit contenir une adresse email valide'
      );
      expect($div.get(1).innerText).to.equals(
        'Le mot de passe doit contenir au minimum 8 caractères'
      );
    });
    // connexion false
    cy.get('#mail').wait(1000).type('uneAdresse@mail.com');
    cy.get('#password').type('mot_de_passe');
    cy.get('[type="submit"]').wait(1000).click();
    // reconnexion true
    cy.get('#mail').wait(1000).type('admin@car.fr');
    cy.get('#password').type('rootroot');
    cy.get('[type="submit"]').wait(1000).click();
    cy.url().should('include','menu');

  });
});

