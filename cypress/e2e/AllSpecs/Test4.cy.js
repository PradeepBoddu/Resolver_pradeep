/// <reference types="cypress" />
import { TestPageObjects } from "../PageObjects/testPageObjects.cy"

var testElems = new TestPageObjects()



describe("verify the options selection in test4", () => {
   
     // here we are triggering the URL by calling beforeEach function from commands.js

      it('validate the options present', () => {

        testElems.enabledTest4Button().scrollIntoView();

     testElems.enabledTest4Button().should('be.visible');
     testElems.disabledTest4Button().should('be.disabled');

      })

    })