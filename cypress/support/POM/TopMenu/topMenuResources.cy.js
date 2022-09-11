
export class TopMenuResources {

    getResourcesMenu(){
        return cy.get('a[href="/au/teaching-resources/"]').contains("Resources ");
    }
    
    getTeachingResources(){
        return cy.get('h4').contains("Teaching Resources").click({force:true})
    }
}