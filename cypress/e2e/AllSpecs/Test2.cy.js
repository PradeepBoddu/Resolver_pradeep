/// <reference types="cypress" />
import { TestPageObjects } from "../PageObjects/testPageObjects.cy"

var testElems = new TestPageObjects()



describe("verify the list items in test2", () => {
   
     // here we are triggering the URL by calling beforeEach function from commands.js

      it('validate the listItems present', () => {

        cy.get('ul.list-group li').should('have.length', 3);
        cy.log ("Verified there are three values in the listgroup");


        cy.get('ul.list-group li').eq(1).should('contain', 'List Item 2');
        cy.xpath("//ul//li[contains(text(),'List Item 2')]/span").should('contain','6');


      })

    })