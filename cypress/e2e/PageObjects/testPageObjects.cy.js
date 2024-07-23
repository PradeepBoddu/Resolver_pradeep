export class TestPageObjects{




    listItem1 () {
        return cy.contains("List Item 1")
    }

    listItem2 () {
        return cy.contains("List Item 2")
    }
    listItem3 () {
        return cy.contains("List Item 3")
    }

    optionsDropDown () {
        return cy.xpath("//button[@id='dropdownMenuButton']");
    }

    selectOption (){
        return cy.xpath("//div[@class='dropdown-menu show']/a")
    }

    enabledTest4Button (){
      return  cy.xpath("//div[@id='test-4-div']//button[@class='btn btn-lg btn-primary']")
    }

    disabledTest4Button (){
       return cy.xpath("//button[@class='btn btn-lg btn-secondary']");
    }

    test5Button (){

        return cy.xpath("//button[@class='btn btn-lg btn-primary' and @id='test5-button']")
    }

    successMessage(){
        return cy.xpath("//div[contains(text(),'You clicked a button!')]");
    }

}