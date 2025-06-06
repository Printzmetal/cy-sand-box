export const getAcceptCookiesBtn = () => 
    cy.get('.jad_cmp_paywall_button-cookies').should('be.visible');

export const getHomeLogoBtn = () => 
    cy.get('.header-main-logo-img').should('be.visible');;