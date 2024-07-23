/// <reference types="cypress" />

import { LoginElements } from "../PageObjects/loginPageObjects.cy"


var loginElem = new LoginElements();


describe("enter the login credentials", () => {
   
   // here we are triggering the URL by calling beforeEach function from commands.js

      it('enter email and password', () => {

        cy.log("navigated to login");
        loginElem.email().should('be.visible');
        loginElem.email().type("pradeepboddu969@gmail.com");
        loginElem.password().should('be.visible');
        loginElem.password().type("Bp@aug2024");

        loginElem.signIn().click();

        cy.log("clicked on signIn button");

      });

    
})