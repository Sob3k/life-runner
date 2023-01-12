export function logout() {
  cy.get(".avatar").click();
  cy.get(".mat-mdc-menu-item").eq(1).click();
}
