import { login } from "cypress/aids/login"
import { logout } from "cypress/aids/logout";

describe('PlansTests', () => {
  before(() => {
    cy.visit("/");
    login();
  })
  after(() => {
    logout();
  })
  it('Should select plan and update info about first training', () => {
    cy.url().should('include', '/home');
    cy.get(".nav-link").eq(2).click();
    cy.url().should('include', '/plans');
    cy.get(".plan-button").filter(':contains("Select Plan")').eq(0).click();
    cy.get(".nav-link").eq(1).click();
    cy.url().should('include', '/dashboard');
    cy.get(".mat-mdc-menu-trigger").eq(1).click();
    cy.get(".mat-mdc-menu-item").first().click();
    cy.get("h3").eq(1).should('contain', "Edit training");
    cy.get('mat-select[formcontrolname="status"]').click();
    cy.get('mat-option').contains('Done').click();
    cy.get('textarea[formcontrolname="notes"]').type("Test note");
    cy.get("button[type=submit]").click();
    cy.get("tr > td").eq(2).should('contain', "Done");
  })
})
