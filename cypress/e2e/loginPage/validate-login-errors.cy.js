const { LoginPage } = require("../../pages/loginPage")

const loginPage = new LoginPage()
const wrongUsername = Cypress.env('WRONG_USERNAME')
const wrongPassword = Cypress.env('WRONG_PASSWORD')

describe("Validate Login page error messages", { testIsolation: true }, () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it("Should Username and Password error messages be present", () => {
        loginPage.clickLoginButton()
        loginPage.noUsernameErrorMessageIsPresent()
        loginPage.noPasswordErrorMessageIsPresent()
    })

    it("Should only Password error messages be present", () => {
        loginPage.typeUsername(wrongUsername)
        loginPage.clickLoginButton()
        loginPage.noUsernameErrorMessageIsNotPresent()
        loginPage.noPasswordErrorMessageIsPresent()
    })
    
    it("Should only Username error messages be present", () => {
        loginPage.typePassword(wrongPassword)
        loginPage.clickLoginButton()
        loginPage.noPasswordErrorMessageIsNotPresent()
        loginPage.noUsernameErrorMessageIsPresent()
    })
    
    it("Should unsuccessful login error messages be present", () => {
        cy.loginForm(wrongUsername, wrongPassword)
        loginPage.noAccountErrorMessageIsPresent()
    })
})