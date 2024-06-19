import { LoginPage } from '../../pages/loginPage'

const loginPage = new LoginPage()

describe("Validate login page", () => {
    before(() => {
        cy.visit('/')
    })

    it("Should login page have image logo", () => {

    })
})