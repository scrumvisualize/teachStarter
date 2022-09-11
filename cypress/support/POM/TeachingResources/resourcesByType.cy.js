
import {Utility} from "../../Utilities/utility";

let utility = new Utility;
let randNumber = 0;

export class ResourcesByType {

    getResourcesByType(){
        return cy.get('ul > li > a').contains("Free").click({force:true});
    }

    getResourceTypeHeader(){
        return cy.get('#main h1');
    }

    getRandomResourceFromList() {
       randNumber = utility.getRandomNumber();   
       return cy.get('section > div').eq(2).find('div').find('ul').find('li').eq(randNumber).then(($li)=>{
              cy.wrap($li).find('div').find('a').find('h4').invoke('text').then((text)=>{
            utility.setItemToBrowserLocalStorage("contentHeader", text);
         });
    });
    }

    clickOnTheResourceItem() {
        console.log("Again rand number:::"+randNumber);
        return cy.get('section > div').eq(2).find('div').find('ul').find('li').eq(randNumber).find('div').find('a').eq(0).click({force:true});
    }

    getResourceHeaderText() {
        return cy.get('#main header > h1')
    }
}