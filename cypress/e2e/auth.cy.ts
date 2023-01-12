import { login } from "cypress/aids/login";
import { logout } from "cypress/aids/logout";
import { contains } from "cypress/types/jquery";

describe('AuthTests', () => {
  it('Should login and signout', () => {
    cy.visit('/')
    cy.get("h2").should('contain', "Login");
    cy.get(".sign-switch-anchor").click();
    cy.get("h2").should('contain', "Sign Up");
    cy.get(".sign-switch-anchor").click();
    login();
    cy.url().should('include', '/home');
    logout();
    cy.get("h2").should('contain', "Login");
  })
})
