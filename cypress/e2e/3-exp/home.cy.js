import * as HomePage from '../../support/pages/homePage.js';

describe('Home page component tests', () => {

    const baseUrl = Cypress.env('baseUrl');
    before(() => {

    });

    Cypress.on('uncaught:exception',()=> {

    });

    it('Titles',() => {
        cy.visit(baseUrl);
        HomePage.getAcceptCookiesBtn().click();
        cy.wait(10000);
        cy.get('.test');
        cy.pause();

    });
});