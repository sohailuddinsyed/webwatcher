var entry= document.getElementById("entry");
entry.addEventListener("click",displaySitenames);

var row=1;

function displaySitenames(){
    var siteName=document.getElementById("site-name").value;

    if(!siteName){
        alert("Enter Sitename:")
        return;
    }
    var i=1;
    
    var display=document.getElementById("display");
    
    var newRow=display.insertRow(row);
    var cell1=newRow.insertCell(0);

    cell1.innerHTML=siteName;
    
    row++;
    localStorage.setItem("siteName",siteName);

    localStorage.getItem(siteName);
    
}


// var storage = new LocalStorage();
// var restrictionList = [];


// document.getElementById('entry').addEventListener('click', function () {
//     addNewSiteClickHandler('addRestrictionSiteLbl', 'addRestrictionTimeLbl', actionAddRectrictionToList, 'notifyForRestrictionList');

// function actionAddRectrictionToList(newSite, newTime) {
//     if (!isContainsRestrictionSite(newSite)) {
//         var restriction = new Restriction(newSite, newTime);
//         addDomainToEditableListBox(restriction, 'restrictionsList', actionEditSite, deleteRestrictionSite, updateItemFromRestrictionList, updateRestrictionList);
//         if (restrictionList === undefined)
//             restrictionList = [];
//         restrictionList.push(restriction);
//         document.getElementById('site-name').value = '';
//         //document.getElementById('addRestrictionTimeLbl').value = '';

//         updateRestrictionList();

//         return true;
//     } else return false;

//     function addDomainToEditableListBox(entity, elementId, actionEdit, actionDelete, actionUpdateTimeFromList, actionUpdateList) {
//         var li = document.createElement('li');
    
//     function updateRestrictionList() {
//         storage.saveValue(STORAGE_RESTRICTION_LIST, restrictionList);
//     }
    
//     function isContainsRestrictionSite(domain) {
//         return restrictionList.find(x => x.url.isMatch(domain)) != undefined;
//     }

//     function viewRestrictionList(items) {
//         if (items !== undefined) {
//             for (var i = 0; i < items.length; i++) {
//                 addDomainToEditableListBox(items[i], 'restrictionsList', actionEditSite, deleteRestrictionSite, updateItemFromRestrictionList, updateRestrictionList);
//             }
//         }
//     }