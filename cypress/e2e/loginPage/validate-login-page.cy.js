import { LoginPage } from '../../pages/loginPage'

const loginPage = new LoginPage()

describe("Validate login page", () => {
    before(() => {
        cy.visit('/')
    })

    it("Should login page have image logo", () => {
        loginPage.pageHasImageLogo()
    })
    
    it("Should login page have login title", () => {
        loginPage.pageHasLoginTitle()
    })

    it("Should login page have Username field placeholder", () => {
        loginPage.usernameFieldHasPlaceholder()
    })

    it("Should login page have Password field placeholder", () => {
        loginPage.passwordFieldHasPlaceholder()
    })

    it("Should login page have Login button", () => {
        loginPage.pageHasLoginButton()
    })
})