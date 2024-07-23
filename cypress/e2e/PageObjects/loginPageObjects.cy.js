export class LoginElements{



    email () {
        return cy.get("#inputEmail")
    }

    password () {
        return cy.get("#inputPassword")
    }

    signIn () {
        return cy.contains("Sign in")
    }

    
}