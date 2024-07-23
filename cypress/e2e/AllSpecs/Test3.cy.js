/// <reference types="cypress" />
import { TestPageObjects } from "../PageObjects/testPageObjects.cy"

var testElems = new TestPageObjects()



describe("verify the options selection in test3", () => {
   
     // here we are triggering the URL by calling beforeEach function from commands.js

      it('validate the options present', () => {

      testElems.optionsDropDown().should('contain', 'Option 1');
        cy.log("default selected is option 1");

        testElems.optionsDropDown().click();
        testElems.selectOption().eq(2).click();
        cy.log("option 3 is selected");

      })

    })