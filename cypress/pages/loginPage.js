export class LoginPage {
    imageLogo = '#logomini"'
    usernameField = '[name="username"]'
    passwordField = '[name="password"]'
    loginButton = '[type="submit"]'
    errorMessage = '.help-block'
    hasError = '.has-error'

    typeUsername(userName) {
        cy.typeInField(this.usernameField).type(userName)
    }
}