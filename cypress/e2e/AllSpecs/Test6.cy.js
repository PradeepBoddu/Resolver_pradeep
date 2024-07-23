/// <reference types="cypress" />
import { TestPageObjects } from "../PageObjects/testPageObjects.cy"

var testElems = new TestPageObjects()



describe("verify thecell value in the table given in test5", () => {
   
    // here we are triggering the URL by calling beforeEach function from commands.js

      it('validate the cell value of the table', () => {

     function cellSelection(row,column){

       var cellValue = cy.get('table').find('tr').eq(row).find('td').eq(column);

       return cellValue;

      }
      
      cellSelection("3","2").should('contain', 'Ventosanzap');

    })

    });