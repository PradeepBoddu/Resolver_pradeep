/// <reference types="cypress" />
import { TestPageObjects } from "../PageObjects/testPageObjects.cy"

var testElems = new TestPageObjects()



describe("verify the clicking and asserting the success message in test5", () => {
    
     // here we are triggering the URL by calling beforeEach function from commands.js

      it('validate the clicking of button and asserting', () => {

        cy.wait(5000);
        testElems.test5Button().should('be.visible');
        testElems.test5Button().click();
        testElems.successMessage().should('be.visible');

        testElems.successMessage().invoke("text").then(value =>{

            cy.log("the message is "  + value);
        })
      })

    })