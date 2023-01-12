import { envs } from "../../cypress.env";

export function login() {
  cy.get("input").first().type(envs.login);
  cy.get("input[type=password]").type(envs.password);
  cy.get("form").submit();
  cy.wait(200);
}
