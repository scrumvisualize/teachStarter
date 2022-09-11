import {TopMenuResources} from "../support/POM/TopMenu/topMenuResources.cy";
import {ResourcesByType} from "../support/POM/TeachingResources/resourcesByType.cy";
import {ResourcesPageDetails} from "../support/POM/TeachingResources/resourcePageDetails.cy";
import {Utility} from "../support/Utilities/utility";

let topMenuResources = new TopMenuResources;
let resourcesByType = new ResourcesByType;
let resourcesPageDetails = new ResourcesPageDetails;
let utility = new Utility;

beforeEach(() => {
    utility.getBaseUrl();
});

describe('End to End test for Teach Starter website', ()=>{
    it('Verify the Download button and title of the randomly selected resource item from the list', ()=>{
        utility.getBaseUrl();
        topMenuResources.getResourcesMenu().click({force:true});
        topMenuResources.getTeachingResources();
        resourcesByType.getResourcesByType();
        resourcesByType.getResourceTypeHeader().should('contain', "Free");
        utility.waitForPageLoad();
        resourcesByType.getRandomResourceFromList();
        resourcesByType.clickOnTheResourceItem()
        utility.waitForPageLoad();
        resourcesByType.getResourceHeaderText().invoke('text').then((text)=>{
            let headerText = text;
            let expectedText = utility.getItemFromBrowserLocalStorage("contentHeader");
            let findExpectedText = expectedText.trim();
            expect(headerText).to.contain(findExpectedText);
        }); 
        resourcesPageDetails.getDownloadButton().should('contain', "Download for Free");
    });
});