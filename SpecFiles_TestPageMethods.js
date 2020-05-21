/**
 * This test verifies the user Login and Logout
 */
//var envDetails = require('../../DataFiles/json/envDetails.json');
var loginPage = require('../../Pages/Guest Services/LoginPage');
var testData = require('../../DataFiles/json/testData.json');
var dashboardPage = require('../../pages/Guest Services/DashboardPage');
var financeHomePage = require('../../pages/Finance/FinanceHomePage');
//var helper = require('protractor-helper');
//var EC = protractor.ExpectedConditions;
//helper.setTimeout(15000);


beforeEach(function ()
{      
  browser.waitForAngularEnabled(false);         
});


describe(' Finance Dashboard', function () {

  xit('TC01_Verify Finance Dashboard', function () {
    console.log('Launch Application with url'); // Prints in the console 
    loginPage.fn_LaunchURL();
    console.log('User Entered Username and Password'); // Prints in the console 
    loginPage.fn_Login();    
    console.log('User clicked on Sign In'); // Prints in the console 
    loginPage.fn_SignIn();
    console.log('Navigate to Finance'); // Prints in the console 
    dashboardPage.fn_NavigateToFinance();
    console.log('Verify the menu items in Finance Home screen'); // Prints in the console 
    financeHomePage.fn_VerifyMenuItems();
    console.log('Click on Dashboard button'); // Prints in the console 
    financeHomePage.fn_ClickDashboardButton();
    console.log('Verify the presence of different chart');  // Prints in the console 
    financeHomePage.fn_VerifyPresenceOfCharts();
    console.log('Select voyage from dropdown'); // Prints in the console 
    financeHomePage.fn_SelectVoyage();

  });

  xit('TC02_Verify Finance Dashboard Home Page', function () {
    console.log('Launch Application with url'); // Prints in the console 
    loginPage.fn_LaunchURL();
    console.log('User Entered Username and Password'); // Prints in the console 
    loginPage.fn_Login();    
    console.log('User clicked on Sign In'); // Prints in the console 
    loginPage.fn_SignIn();
    console.log('Navigate to Finance'); // Prints in the console 
    dashboardPage.fn_NavigateToFinance();
    console.log('Verify the menu items in Finance Home screen'); // Prints in the console 
    financeHomePage.fn_VerifyMenuItems();
    console.log('Click on Dashboard button'); // Prints in the console 
    financeHomePage.fn_ClickDashboardButton();
    console.log('Verify the presence of different chart');  // Prints in the console 
    financeHomePage.fn_VerifyPresenceOfCharts();
    console.log('Verify the presence of graph items');  // Prints in the console 
    financeHomePage.fn_VerifyGraphItems();
  });
 
  xit('TC03_Verify Finance Director Dashboard', function () {
    console.log('Launch Application with url'); // Prints in the console 
    loginPage.fn_LaunchURL();
    console.log('User Entered Username and Password'); // Prints in the console 
    loginPage.fn_Login();    
    console.log('User clicked on Sign In'); // Prints in the console 
    loginPage.fn_SignIn();
    console.log('Navigate to Finance'); // Prints in the console 
    dashboardPage.fn_NavigateToFinance();
    console.log('Verify the menu items in Finance Home screen'); // Prints in the console 
    financeHomePage.fn_VerifyMenuItems();
    console.log('Click on Dashboard button'); // Prints in the console 
    financeHomePage.fn_ClickDashboardButton();
    console.log('Click on the Guest,Crew,Exec label on chart'); // Prints in the console 
    financeHomePage.fn_ClickonGuestCrewExecInChart();
    console.log('Verify the search functionality'); // Prints in the console 
    financeHomePage.fn_Search();
    console.log('Verify the Header columns of the table'); // Prints in the console 
    financeHomePage.fn_VerifyTableHeaderElements();

  });

  xit('TC04_Verify Finance Director Dashboard Credit Card Status', function () {
    console.log('Launch Application with url'); // Prints in the console 
    loginPage.fn_LaunchURL();
    console.log('User Entered Username and Password'); // Prints in the console 
    loginPage.fn_Login();    
    console.log('User clicked on Sign In'); // Prints in the console 
    loginPage.fn_SignIn();
    console.log('Navigate to Finance'); // Prints in the console 
    dashboardPage.fn_NavigateToFinance();
    console.log('Verify the menu items in Finance Home screen'); // Prints in the console 
    financeHomePage.fn_VerifyMenuItems();
    console.log('Click on Dashboard button'); // Prints in the console 
    financeHomePage.fn_ClickDashboardButton();
    console.log('Click on the Guest,Crew,Exec label on chart'); // Prints in the console 
    financeHomePage.fn_ClickonGuestCrewExecInChart();
    console.log('Verify the search functionality'); // Prints in the console 
    financeHomePage.fn_Search();
    console.log('Verify the Header columns of the table'); // Prints in the console 
    financeHomePage.fn_VerifyTableHeaderElements();
    console.log('Click on Credit Card Status'); // Prints in the console 
    financeHomePage.fn_ClickCreditCardStatus();
    console.log('Verify the Header columns of the table'); // Prints in the console 
    financeHomePage.fn_VerifyTableHeaderElements();

  });

  xit('TC05_Verify Finance Director Dashboard Number Of Accounts', function () {
    console.log('Launch Application with url'); // Prints in the console 
    loginPage.fn_LaunchURL();
    console.log('User Entered Username and Password'); // Prints in the console 
    loginPage.fn_Login();    
    console.log('User clicked on Sign In'); // Prints in the console 
    loginPage.fn_SignIn();
    console.log('Navigate to Finance'); // Prints in the console 
    dashboardPage.fn_NavigateToFinance();
    console.log('Verify the menu items in Finance Home screen'); // Prints in the console 
    financeHomePage.fn_VerifyMenuItems();
    console.log('Click on Dashboard button'); // Prints in the console 
    financeHomePage.fn_ClickDashboardButton();
    console.log('Click on the Guest,Crew,Exec label on chart'); // Prints in the console 
    financeHomePage.fn_ClickonGuestCrewExecInChart();
    console.log('Verify the search functionality'); // Prints in the console 
    financeHomePage.fn_Search();
    console.log('Verify the Header columns of the table'); // Prints in the console 
    financeHomePage.fn_VerifyTableHeaderElements();
    console.log('Click on Number Of Accounts'); // Prints in the console 
    financeHomePage.fn_NumberOfAccounts();
    console.log('Verify the Header columns of the table'); // Prints in the console 
    financeHomePage.fn_VerifyTableHeaderElements();

  });

  xit('TC06_Verify Correct Search', function () {
    console.log('Launch Application with url'); // Prints in the console 
    loginPage.fn_LaunchURL();
    console.log('User Entered Username and Password'); // Prints in the console 
    loginPage.fn_Login();    
    console.log('User clicked on Sign In'); // Prints in the console 
    loginPage.fn_SignIn();
    console.log('Navigate to Finance'); // Prints in the console 
    dashboardPage.fn_NavigateToFinance();
    console.log('Verify the menu items in Finance Home screen'); // Prints in the console 
    financeHomePage.fn_VerifyMenuItems();
    console.log('Click on Dashboard button'); // Prints in the console 
    financeHomePage.fn_ClickDashboardButton();
    //Correct Search
    console.log('Verify Search for valid data'); // Validate correct search
    financeHomePage.fn_VerifyCorrectSearch();
    //Incorrect Search
    console.log('Verify Search for invalid data'); // Validate incorrect search
    financeHomePage.fn_VerifyIncorrectSearch();
  });

  xit('TC07_Verify Download File', function () {
    console.log('Launch Application with url'); // Prints in the console 
    loginPage.fn_LaunchURL();
    console.log('User Entered Username and Password'); // Prints in the console 
    loginPage.fn_Login();    
    console.log('User clicked on Sign In'); // Prints in the console 
    loginPage.fn_SignIn();
    console.log('Navigate to Finance'); // Prints in the console 
    dashboardPage.fn_NavigateToFinance();
    console.log('Verify the menu items in Finance Home screen'); // Prints in the console 
    financeHomePage.fn_VerifyMenuItems();
    console.log('Click on Dashboard button'); // Prints in the console 
    financeHomePage.fn_ClickDashboardButton();
    //Download file
    console.log('Click onFile download option'); // Prints in the console 
    financeHomePage.fn_ClickDownloadFile();

  });
 

  xit('TC08_Verify Credit Card Count', function () {
    console.log('Launch Application with url'); // Prints in the console 
    loginPage.fn_LaunchURL();
    console.log('User Entered Username and Password'); // Prints in the console 
    loginPage.fn_Login();    
    console.log('User clicked on Sign In'); // Prints in the console 
    loginPage.fn_SignIn();
    console.log('Navigate to Finance'); // Prints in the console 
    dashboardPage.fn_NavigateToFinance();
    console.log('Verify the menu items in Finance Home screen'); // Prints in the console 
    financeHomePage.fn_VerifyMenuItems();
    console.log('Click on Dashboard button'); // Prints in the console 
    financeHomePage.fn_ClickDashboardButton();
    //Click Credit Card
    console.log('Click on Credit Card Status'); // Prints in the console 
    financeHomePage.fn_ClickCreditCardStatus();
    //Validate Credit Card Count
    console.log('Validate the credit card count'); // Prints in the console 
    financeHomePage.fn_validateCreditCardCount();


  });
 
  xit('TC09_Verify Number Of Accounts Count', function () {
    console.log('Launch Application with url'); // Prints in the console 
    loginPage.fn_LaunchURL();
    console.log('User Entered Username and Password'); // Prints in the console 
    loginPage.fn_Login();    
    console.log('User clicked on Sign In'); // Prints in the console 
    loginPage.fn_SignIn();
    console.log('Navigate to Finance'); // Prints in the console 
    dashboardPage.fn_NavigateToFinance();
    console.log('Verify the menu items in Finance Home screen'); // Prints in the console 
    financeHomePage.fn_VerifyMenuItems();
    console.log('Click on Dashboard button'); // Prints in the console 
    financeHomePage.fn_ClickDashboardButton();
    //Click Credit Card
    console.log('Click on Number Of Accounts'); // Prints in the console 
    financeHomePage.fn_NumberOfAccounts();
    //Validate Credit Card Count
    console.log('Validate the number of account count'); // Prints in the console 
    financeHomePage.fn_validateNoOfAccountCount();


  });


});





 

