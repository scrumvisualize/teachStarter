
export class TopMenuResources {

    getResourcesMenu(menu){
        return cy.get('a[href="/au/teaching-resources/"]').contains(menu);
    }

    getTeachingResources(text){
        return cy.get('h4').contains(text).click({force:true})
    }
}