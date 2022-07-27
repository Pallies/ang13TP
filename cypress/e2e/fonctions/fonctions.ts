export function login(profil: string) {
  cy.fixture('utilisateurs.json')
    .then((data) => data.utilisateurs)
    .then((data: utilisateur[]) => {
      let user = data.filter((data) => data.profil == profil)[0];
      if (user) {
        cy.get('#mail').clear().type(user.email);
        cy.get('#password').clear().type(user.mdp);
      }
      cy.get('button').click();
    });
}
export function buttonContains(
  button: JQuery<HTMLButtonElement>,
  profil: string
) {
  cy.fixture('menu.json')
    .then((data) => data.menu)
    .then((data: buttonMenu[]) => {
      let buttons = data
        .filter((data) => Object.keys(data)[0] == profil)
        .map((data: buttonMenu) => {
          return data[profil].button;
        });

      button.each((i, $button) => {
        expect($button.innerText).includes(buttons[0]);
      });
    });
}
