// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
/// <reference types="cypress" />

/**
 *Custom command that types a string into a input field
 @param {String} selector Name of the selector
 @param {String} text Text to type into the filed
 */
Cypress.Commands.add('typeInField', (selector, text) => {
    cy.get(selector).should('be.visible').type(text)
})

/**
 *Custom command validates presents of the element
 @param {String} selector Name of the element's selector
 */
Cypress.Commands.add('isElementPresent', (selector) => {
    cy.get(selector).should('be.visible')
})

/**
 *Custom command that types a string into a input field
 @param {String} selector Name of the selector
 @param {String} text Text of the element
 */
Cypress.Commands.add('elementHasText', (selector, text) => {
    cy.get(selector)
        .should('be.visible')
        .invoke('text')
        .then(elementText => expect(elementText).to.equal(text))
})

/**
 *Custom command that validates presents of the element by selector and text
 @param {String} selector Name of the selector
 @param {String} text Text of the element
 */
Cypress.Commands.add('elementExistsBySelectorAndText', (selector, text) => {
    cy.get(selector).contains(text).should('be.visible')
})

/**
 *Custom command that types a string into a input field
 @param {String} selector Name of the selector
 @param {String} placeholder Placeholder for the element
 */
Cypress.Commands.add('isPlaceholderCorrect', (selector, placeholder) => {
    cy.get(selector)
        .invoke('attr', 'placeholder')
        .then(text => expect(text).equal(placeholder))
})




