import { loginConsts } from "../consts/login"

export class LoginPage {
    imageLogo = '#logomini'
    loginTitle = 'center h1'
    usernameField = '[name="username"]'
    passwordField = '[name="password"]'
    loginButton = '[type="submit"]'
    errorMessage = '.help-block'
    hasErrorMessage = '.has-error span'

    pageHasImageLogo() {
        cy.get(this.imageLogo).should('be.visible')
    }

    pageHasLoginTitle(){
        cy.elementHasText(this.loginTitle, loginConsts.loginTitle)
    }

    typeUsername(userName) {
        cy.typeInField(this.usernameField, userName)
    }

    clearUsernameField() {
        cy.clear(this.usernameField)
    }

    typePassword(password) {
        cy.typeInField(this.passwordField, password)
    }

    clearPasswordField() {
        cy.clear(this.passwordField)
    }

    usernameFieldHasPlaceholder() {
        cy.isPlaceholderCorrect(this.usernameField, loginConsts.usernamePlaceholder)
    }

    passwordFieldHasPlaceholder() {
        cy.isPlaceholderCorrect(this.passwordField, loginConsts.passwordPlaceholder)
    }

    pageHasLoginButton() {
        cy.get(this.loginButton)
            .should('have.attr', 'type', 'submit')
            .invoke('val')
            .then(value => expect(value).equal(loginConsts.loginButton))
    }

    clickLoginButton() {
        cy.get(this.loginButton).should('be.visible').click()
    }

    noUsernameErrorMessageIsPresent() {
        cy.elementExistsBySelectorAndText(this.hasErrorMessage, loginConsts.errorNoUsernameMessage)
    }

    noUsernameErrorMessageIsNotPresent() {
        cy.contains(loginConsts.errorNoUsernameMessage).should('not.exist')
    }

    noPasswordErrorMessageIsPresent() {
        cy.elementExistsBySelectorAndText(this.hasErrorMessage, loginConsts.errorNoPasswordMessage)
    }

    noPasswordErrorMessageIsNotPresent() {
        cy.contains(loginConsts.errorNoPasswordMessage).should('not.exist')
    }

    noAccountErrorMessageIsPresent() {
        cy.elementExistsBySelectorAndText(this.hasErrorMessage, loginConsts.errorNoAccountMessage)
    }
}