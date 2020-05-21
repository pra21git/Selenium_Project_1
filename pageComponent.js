
var dashboardPage = require('../Guest Services/DashboardPage');
var helper = require('protractor-helper');
var EC = protractor.ExpectedConditions;
var Pdriver=require('../Common/Pdriver')
var common=require('../Common/Common.js')
var reporter=require('../Common/Reporter.js')


var FinanceHomePage=function(){

    var mainMenu=by.xpath("//a[contains(@id,'MainMenu')]");
    var sailSignUtilities=by.xpath("//a[contains(@id,'SailSignUtilities')]");
    var onwardsCredits=by.id(" OnwardsCredits");
    var crewSailSign=by.id(" CrewSailSign");
    var dashboard=by.id(" Dashboard");
    var folioUtilities=by.id(" FolioUtilities");
    var moveCc=by.id(" MoveCc");
    var sailSignSetup=by.id(" SailSignSetup");
    var guestCrewChart=by.xpath("//div[contains(.,'GUESTS,EXEC,CREWCOUNT') and contains(@class,'chart-header')]");
    var creditCardStatusChart=by.xpath("//div[contains(.,'CREDIT CARD STATUS') and contains(@class,'chart-header')]");
    var noOfAccountChart=by.xpath("//div[contains(@class,'chart-header') and contains(.,'NUMBER OF ACCOUNTS')]");
    var arrowSelectVoyage=by.xpath("//span[contains(@class,'ui-dropdown-trigger-icon')]");
    var selectVoyage=by.xpath("//li[contains(@class,'i-dropdown-item')][1]");
    var guestlabel=by.xpath("//div[@class='item-label' and contains(.,'GUEST')]");
    var crewlabel=by.xpath("//div[@class='item-label' and contains(.,'CREW')]");
    var execlabel=by.xpath("//div[@class='item-label' and contains(.,'EXEC')]");
    var activelabel=by.xpath("//div[@class='item-label' and contains(.,'ACTIVE')]");
    var rejectedlabel=by.xpath("//div[@class='item-label' and contains(.,'REJECTED')]");
    var calcelledlabel=by.xpath("//div[@class='item-label' and contains(.,'CANCELLED')]");
    var cashlabel=by.xpath("//div[@class='item-label' and contains(.,'CASH')]");
    var mixedlabel=by.xpath("//div[@class='item-label' and contains(.,'MIXED')]");
    var cclabel=by.xpath("//div[@class='item-label' and contains(.,'CC')]");
    var openlabel=by.xpath("//div[@class='item-label' and contains(.,'OPEN')]");
    var searchbox=by.xpath("//input[contains(@placeholder,'Search by')]");
    //var firstnamecol=by.xpath("/a[@role='tab']");
    var firstnamecol=by.xpath('//table[@class="ui-table-scrollable-body-table"]/descendant::td');
    //var firstnamecol='//table[contains(.,"Last Name")]/descendant::tr[@class="table-content ng-star-inserted"]/descendant::td';
    var lastnametable=by.xpath(" //div[@class='ui-table-scrollable-view']//th[contains(.,'Last Name') and contains(@class,'ui-sortable-column')]");
    var firstnametable=by.xpath(" //div[@class='ui-table-scrollable-view']//th[contains(.,'First Name') and contains(@class,'ui-sortable-column')]");
    var stateroom=by.xpath(" //div[@class='ui-table-scrollable-view']//th[contains(.,'Stateroom') and contains(@class,'ui-sortable-column')][1]");
    var bookingNumber=by.xpath(" //div[@class='ui-table-scrollable-view']//th[contains(.,'Booking') and contains(@class,'ui-sortable-column')][1]");
    var individualBookingNumber=by.xpath(" //div[@class='ui-table-scrollable-view']//th[contains(.,'Individual Booking') and contains(@class,'ui-sortable-column')]");
    var stateroomCategory=by.xpath(" //div[@class='ui-table-scrollable-view']//th[contains(.,'Stateroom Category') and contains(@class,'ui-sortable-column')]");
    var loyaltyLevel=by.xpath(" //div[@class='ui-table-scrollable-view']//th[contains(.,'Loyalty') and contains(@class,'ui-sortable-column')]");
    var seqNumber=by.xpath(" //div[@class='ui-table-scrollable-view']//th[contains(.,'Seq Numbe') and contains(@class,'ui-sortable-column')]");
    var folioStatus=by.xpath(" //div[@class='ui-table-scrollable-view']//th[contains(.,'Folio Status') and contains(@class,'ui-sortable-column')]");

    var creditCardStatus=by.xpath("//div[contains(.,'CREDIT CARD STATUS')]/img");
    var numberOfAccounts=by.xpath("//div[contains(.,'NUMBER OF ACCOUNTS')]/img");

    var downloadPDF=by.xpath("//input[@id='SmartSearch']/parent::div//button[@title='Download PDF']");
    var downloadExcel=by.xpath("//input[@id='SmartSearch']/parent::div//button[@title='Download Excel']");

    var searchDetailsBox=by.xpath("//input[contains(@placeholder,'Search') and contains(@class,'ng-touched')]");
    var searchCount=by.xpath("//b[contains(.,'Total Count: ')]/span");
    var searchText=by.xpath("");

    var creditCardCount=by.xpath("(//div[@class='total-value ng-star-inserted'])[2]");
    var noOfAccountCount=by.xpath("(//div[@class='total-value ng-star-inserted'])[3]");
    var totalCount=by.xpath("//b[contains(.,'Total Count:')]/span");


    this.fn_validateCreditCardCount=function(){
        Pdriver.waitForSomeTime(3);  
        var creditCardVal;
        creditCardVal=Pdriver.getElementTextBy(creditCardCount);
        var totalCountVal;
        totalCountVal=Pdriver.getElementTextBy(totalCount);
       // expect(creditCardVal.equals(totalCountVal)).toBe(true);
       // expect(creditCardVal.equals(totalCountVal)).not().toBe(false);
        if(creditCardVal==totalCountVal){
            Pdriver.waitForSomeTime(2);
            reporter.addPassStep("Total number of credit card displayed matched with table");
            //common.fn_ValidateIsDisplayedBy(dashboard) ;
            
        }
        else{
            Pdriver.waitForSomeTime(2);
            //common.fn_ValidateIsDisplayedBy(dashboard);
            reporter.addFailStepValidationIssue("Total number of credit card displayed was not matched with table");
        }
    }

    this.fn_validateNoOfAccountCount=function(){
        Pdriver.waitForSomeTime(3); 
        Pdriver.isDisplayedBy(noOfAccountCount).then(function(flg){
                
           Pdriver.getElementTextBy(noOfAccountCount).then(function(txt){
            Pdriver.getElementTextBy(totalCount).then(function(txt1){
                if(noOfAccountVal==totalCountVal){
                    Pdriver.waitForSomeTime(2);
                    
                    //common.fn_ValidateIsDisplayedBy(dashboard) ;
                    reporter.addPassStep("No of Account is validated");
                }
                else{
                    Pdriver.waitForSomeTime(2);
                    //common.fn_ValidateIsDisplayedBy(dashboard);
                    reporter.addFailStepValidationIssue("no of Accounts was not validated No fo Account :"+noOfAccountVal +" Total Account: "+totalCountVal);
                }
               
            });
           
            
        });
         });
    } 
    this.fn_validateNoOfAccountCount1=function(){
        Pdriver.waitForSomeTime(3);  
        var noOfAccountVal;
        noOfAccountVal=Pdriver.getElementTextBy(noOfAccountCount);
        var totalCountVal;
        totalCountVal=Pdriver.getElementTextBy(totalCount);
       // expect(creditCardVal.equals(totalCountVal) ;
       // expect(creditCardVal.equals(totalCountVal)).not().toBe(false);
        if(noOfAccountVal==totalCountVal){
            Pdriver.waitForSomeTime(2);
            
            //common.fn_ValidateIsDisplayedBy(dashboard) ;
            reporter.addPassStep("No of Account is validated");
        }
        else{
            Pdriver.waitForSomeTime(2);
            //common.fn_ValidateIsDisplayedBy(dashboard);
            clsreporter.addFailStepValidationIssue("no of Accounts was not validated No fo Account :"+noOfAccountVal +" Total Account: "+totalCountVal);
        }
    }   

   this.fn_VerifyCorrectSearch=function(){
    Pdriver.waitForSomeTime(5);
    var searchValue = testData.login.searchData;  
    //testData.login.userID; 
    Pdriver.enterTextOnElement(searchDetailsBox,searchValue);
    var count;
    count=Pdriver.getElementText(searchCount); 
    const intCount=NUMBER(count);
    expect(intCount>0).toBe(true);
    expect(intCount=0).toBe(false);   
    
   }

   this.fn_VerifyIncorrectSearch=function(){
    Pdriver.waitForSomeTime(5);
    var searchValue = testData.login.IncsearchData; 
    Pdriver.enterTextOnElement(searchDetailsBox,searchValue);
    var count;
    count=Pdriver.getElementText(searchCount); 
    const intCount=NUMBER(count);
    expect(intCount>0).toBe(false);
    expect(intCount=0).toBe(true);   
    
   }
   
    this.fn_VerifyMenuItems=function(){
        //Pdriver.waitForSomeTime(15);
        console.log('main Menu check');
        Pdriver.waitForLoadinScreenToDisappearTimeout(20);
        Pdriver.waitForElementPresenceBy(mainMenu,40);


        common.fn_ValidateIsDisplayedBy(mainMenu) ;

        common.fn_ValidateIsDisplayedBy(onwardsCredits) ;
        
        common.fn_ValidateIsDisplayedBy(onwardsCredits) ;
        common.fn_ValidateIsDisplayedBy(crewSailSign) ;
        common.fn_ValidateIsDisplayedBy(dashboard) ;
        common.fn_ValidateIsDisplayedBy(folioUtilities) ;
        //needs to add click on 3 dots
        //common.fn_ValidateIsDisplayedBy(sailSignUtilities) ;
    }

    this.fn_VerifyGraphItems=function(){
        Pdriver.waitForSomeTime(5);
        common.fn_ValidateIsDisplayedBy(guestlabel) ;
        common.fn_ValidateIsDisplayedBy(crewlabel) ;
        common.fn_ValidateIsDisplayedBy(execlabel) ;
        common.fn_ValidateIsDisplayedBy(activelabel) ;
        common.fn_ValidateIsDisplayedBy(rejectedlabel) ;
        common.fn_ValidateIsDisplayedBy(calcelledlabel) ;
        common.fn_ValidateIsDisplayedBy(cashlabel) ;
        common.fn_ValidateIsDisplayedBy(mixedlabel) ;
        common.fn_ValidateIsDisplayedBy(cclabel) ;
        common.fn_ValidateIsDisplayedBy(openlabel) ;
    }

    this.fn_ClickDownloadFile=function(){  
        Pdriver.waitForSomeTime(5);
        Pdriver.clickElementBy(downloadPDF);
        Pdriver.waitForSomeTime(5);
        Pdriver.clickElementBy(downloadExcel);
    } 

    this.fn_ClickCreditCardStatus=function(){
        Pdriver.waitForSomeTime(2);
        Pdriver.clickElementBy(creditCardStatus);
    }

    this.fn_NumberOfAccounts=function(){
        Pdriver.waitForSomeTime(2);
        Pdriver.clickElementBy(numberOfAccounts);
        Pdriver.waitForLoadinScreenToDisappear();
    }

    this.fn_VerifyTableHeaderElements=function(){
        Pdriver.waitForSomeTime(5);
        common.fn_ValidateIsDisplayedBy(lastnametable) ;
        common.fn_ValidateIsDisplayedBy(firstnametable) ;
        common.fn_ValidateIsDisplayedBy(stateroom) ;
        common.fn_ValidateIsDisplayedBy(bookingNumber) ;
        common.fn_ValidateIsDisplayedBy(individualBookingNumber) ;
        common.fn_ValidateIsDisplayedBy(stateroomCategory) ;
        common.fn_ValidateIsDisplayedBy(loyaltyLevel) ;
        common.fn_ValidateIsDisplayedBy(seqNumber) ; 
        common.fn_ValidateIsDisplayedBy(folioStatus) ; 
    }

    this.fn_ClickDashboardButton=function(){
        Pdriver.waitForLoadinScreenToDisappear();
        Pdriver.clickElementBy(dashboard);
        //this.dashboard().click();
        //expect(dashboardPage.pageLoadSpinner().isDisplayed() ;
    }
    this.fn_VerifyPresenceOfCharts=function(){
        common.fn_ValidateIsDisplayedBy(guestCrewChart) ;
        common.fn_ValidateIsDisplayedBy(creditCardStatusChart) ;
        common.fn_ValidateIsDisplayedBy(noOfAccountChart) ;

       

    }
    this.fn_SelectVoyage=function(){
        Pdriver.waitForLoadinScreenToDisappear();
        Pdriver.clickElementBy(arrowSelectVoyage);
        Pdriver.waitForSomeTime(1);
        common.fn_ValidateIsDisplayedBy(selectVoyage) ;
        Pdriver.clickElementBy(selectVoyage);
        Pdriver.waitForLoadinScreenToDisappear();


    }
    this.fn_ClickonGuestCrewExecInChart=function(){

        Pdriver.waitForSomeTime(5);

        Pdriver.clickElementBy(crewlabel);

        Pdriver.waitForLoadinScreenToDisappearTimeout(5);


        Pdriver.clickElementBy(crewlabel);

        Pdriver.waitForLoadinScreenToDisappearTimeout(5);

        Pdriver.clickElementBy(guestlabel);

        Pdriver.waitForLoadinScreenToDisappearTimeout(5);

    }
    
    

    this.fn_Search=function(){


        //console.log('Total Element'+element.all(firstnamecol).length);
        let listofelemenets=element.all(firstnamecol);
        listofelemenets.getText().then(function(items){

            var len=items.length;

            var searchtxt=items[4];

            console.log('text coming up'+searchtxt);
            console.log('length is'+len);

            Pdriver.enterTextOnElement(searchbox,searchtxt);

            listofelemenets.getText().then(function(txt) {
                expect(txt[4].includes(searchtxt)).toBe(true);
            });


           
        });

    }

    



};

module.exports =new FinanceHomePage();
